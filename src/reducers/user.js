import {LOGIN_USER, LOGOUT_USER, RECEIVE_USERS} from '../actions/user'
import {ADD_QUESTION} from "../actions/questions";

export function users(state={}, action) {
    switch (action.type) {

        case RECEIVE_USERS:
            return {...state, ...action.users}

        case ADD_QUESTION:
            const {question, userId} = action
            return {
                ...state,
                [action.userId]: {
                    ...state[userId],
                    questions: [...state[userId].questions, question]
                }
            }
        default:
            return state
    }
}

export function currentUser(state=null, action) {
    switch (action.type) {
        case LOGIN_USER:
            return action.userId
        case LOGOUT_USER:
            return null
        default:
            return state
    }
}
