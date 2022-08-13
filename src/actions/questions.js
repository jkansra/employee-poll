import { hideLoading, showLoading } from "react-redux-loading-bar";
import { saveQuestion } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_POLL = "ADD_POLL";

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

const addPoll = (question) => {
    return {
        type: ADD_POLL,
        question
    }
}

export const handleAddPoll = (optionOneText, optionTwoText) => {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser,
        })
            .then((question) => dispatch(addPoll(question)))
            .then(() => dispatch(hideLoading()));
    };
}
