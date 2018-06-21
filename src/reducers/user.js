import {LOGIN_USER, LOGOUT_USER, RECEIVE_USERS} from '../actions/user'

export function users(state={}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {...state, ...action.users}
        default:
            return state
    }
}

export function currentUser(state=null, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...action.user
            }
        case LOGOUT_USER:
            return null
        case RECEIVE_USERS:
            return state ? action.users[state.id] : null
        default:
            return state
    }
}
