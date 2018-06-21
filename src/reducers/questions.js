
import {RECEIVE_QUESTIONS} from "../actions/questions";
import {LOGIN_USER} from "../actions/user";

const formatQuestion = (q, currentUser) => {
    const totalVotes = q.optionOne.votes.length + q.optionTwo.votes.length
    q.optionOne['votePercentage'] = (q.optionOne.votes.length / totalVotes) * 100
    q.optionTwo['votePercentage'] = (q.optionTwo.votes.length / totalVotes) * 100
}

export function questions(state={}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            const {questions} = action

            Object.keys(questions).forEach((key) => {
                const q = questions[key]
                formatQuestion(q)
            })

            return {...state, ...action.questions}
        default:
            return state
    }
}

const questionSectionsDefaultState = {
    answeredQuestions: [],
    unansweredQuestions: []
}

export function questionSections(state=questionSectionsDefaultState, action) {
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
            return questionSectionsDefaultState
        default:
            return state
    }
    return state
}

