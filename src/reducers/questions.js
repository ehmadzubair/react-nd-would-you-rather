
import {RECEIVE_QUESTIONS} from "../actions/questions";

export function questions(state={}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {...state, ...action.questions}
        default:
            return state
    }
}

export function answeredQuestions(state=[], action) {
    return state
}

export function unansweredQuestions(state=[], action) {
    return state
}
