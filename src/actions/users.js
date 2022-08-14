export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER = "UPDATE_USER";
export const ADD_POLL_TO_USER = "ADD_POLL_TO_USER"

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const addPollToUser = (question, users) => {
    return {
        type: ADD_POLL_TO_USER,
        question,
        users
    }
}

export const updateUser = (question, users) => {
    return {
        type: UPDATE_USER,
        question,
        users
    }
}
