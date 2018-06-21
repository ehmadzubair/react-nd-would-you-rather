import React from 'react'
import { combineReducers } from 'redux'
import {currentUser, users} from './user'
import {questions} from './questions'

const wyrApp = combineReducers({
    currentUser,
    users,
    questions
})

export default wyrApp
