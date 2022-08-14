import { hideLoading, showLoading } from "react-redux-loading-bar";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addPollToUser, updateUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_POLL = "ADD_POLL";
export const SUBMIT_POLL = "SUBMIT_POLL";

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

const submitPoll = (question) => {
    return {
        type: SUBMIT_POLL,
        question
    }
}

export const handleAddPoll = (optionOneText, optionTwoText) => {
    return (dispatch, getState) => {
        const { authedUser, users } = getState();

        dispatch(showLoading());

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser,
        })
            .then((question) => {
                dispatch(addPollToUser(question, users))
                dispatch(addPoll(question))
            })
            .then(() => dispatch(hideLoading()))
    };
}

export const handleSubmitPoll = (question, users) => {
    return (dispatch) => {
        return saveQuestionAnswer(question).then(result => {
            if (result) {
                dispatch(submitPoll(question));
                dispatch(updateUser(question, users));
            }
            else {
                alert("ERROR in submitting the poll")
            }
        })

    }
}
