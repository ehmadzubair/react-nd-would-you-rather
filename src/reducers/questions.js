
import {RECEIVE_QUESTIONS} from "../actions/questions";
import {LOGIN_USER} from "../actions/user";

export function questions(state={}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {...state, ...action.questions}
        default:
            return state
    }
}

const questionsSectionsDefaultState = {
    answeredQuestions: [],
    unansweredQuestions: []
}

export function questionSections(state=questionsSectionsDefaultState, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            const {questions, currentUser} = action
            const {id} = currentUser
            const answeredQuestions = []
            const unansweredQuestions = []

            Object.keys(questions).forEach((key) => {
                const question = questions[key]
                const allVotes = [...question.optionOne.votes, ...question.optionTwo.votes]
                allVotes.includes(id) ? answeredQuestions.push(key) : unansweredQuestions.push(key)
            })

            return {
                answeredQuestions,
                unansweredQuestions
            }
        case LOGIN_USER:
            return questionsSectionsDefaultState
        default:
            return state
    }
    return state
}

