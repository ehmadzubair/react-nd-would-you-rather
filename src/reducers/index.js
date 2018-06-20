import React from 'react'
import { combineReducers } from 'redux'
import {currentUser, users} from './user'
import {questions, questionSections} from './questions'

const wyrApp = combineReducers({
    currentUser,
    users,
    questions,
    questionSections
})

export default wyrApp
