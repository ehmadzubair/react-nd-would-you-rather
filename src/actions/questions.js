
import {_getQuestions} from "../files/_DATA";

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function getQuestions() {
    return (dispatch, getState) => {
        return _getQuestions().then( (questions) => {
            const {currentUser} = getState()
                dispatch(receiveQuestions(questions, currentUser))
            }

        )
    }
}

export function receiveQuestions(questions, currentUser) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
        currentUser
    }
}