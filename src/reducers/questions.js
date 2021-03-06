import {ADD_QUESTION, RECEIVE_QUESTIONS} from "../actions/questions";

const formatQuestion = (q) => {
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

        case ADD_QUESTION:
            let {question} = action
            question = formatQuestion(question)
            return {
                ...state,
                [question.id]: question
            }
        default:
            return state
    }
}


