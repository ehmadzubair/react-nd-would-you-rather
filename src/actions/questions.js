
import {_getQuestions, _saveQuestion, _saveQuestionAnswer} from "../files/_DATA";
import {updateQuestionsAndUsers} from "./shared";

export const ADD_QUESTION = 'ADD_QUESTION'
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
            updateQuestionsAndUsers(dispatch)
        })
    }
}


export function addNewQuestion(optionOneText, optionTwoText, userId) {
    return (dispatch) => {
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: userId
        }).then(() => {
            updateQuestionsAndUsers(dispatch)
        })
    }
}