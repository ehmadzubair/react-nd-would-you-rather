
import {_getQuestions} from "../files/_DATA";

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function getQuestions() {
    return (dispatch) => {
        return _getQuestions().then( (questions) => {
                dispatch(receiveQuestions(questions))
            }

        )
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}