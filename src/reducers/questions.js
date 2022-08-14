import { ADD_POLL, RECEIVE_QUESTIONS, SUBMIT_POLL } from '../actions/questions';

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_POLL:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case SUBMIT_POLL:
            return {
                ...state,
                [action.question.qid]: {
                    ...state[action.question.qid],
                    [action.question.answer]: {
                        ...state[action.question.qid][action.question.answer],
                        votes: state[action.question.qid][action.question.answer].votes.concat([action.question.authedUser])
                    }
                }
            }
        default:
            return state;
    }
}
