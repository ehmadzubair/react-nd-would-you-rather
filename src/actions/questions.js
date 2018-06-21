
import {_getQuestions, _saveQuestionAnswer} from "../files/_DATA";
import {getUsers} from "./user";

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function getQuestions() {
    return (dispatch) => {
        return _getQuestions().then( (questions) => {
                dispatch(receiveQuestions(questions))
            })
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function saveQuestionAnswer(user, question_id, answer) {
    return (dispatch) => {
        return _saveQuestionAnswer({
            authedUser:user,
            qid:question_id,
            answer
        }).then(() => {
            dispatch(getQuestions())
            dispatch(getUsers())
        })
    }
}