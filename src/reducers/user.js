import {LOGIN_USER} from '../actions/login'

export function users(state=[], action) {
    return state
}

export function currentUser(state={}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...action.user
            }
        default:
            return state
    }
}
