import React from 'react'
import { combineReducers } from 'redux'
import {currentUser, users} from './user'
import {questions, answeredQuestions, unansweredQuestions} from './questions'

const wyrApp = combineReducers({
    currentUser,
    users,
    questions,
    answeredQuestions,
    unansweredQuestions
})

export default wyrApp
