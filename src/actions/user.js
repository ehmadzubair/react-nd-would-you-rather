import {_getUsers} from '../files/_DATA'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export function getUsers() {
    return (dispatch) => {
        return _getUsers().then((users) => {
            dispatch(receiveUsers(users))
        }

        )
    }
}

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function loginUser(user) {
    return {
        type: LOGIN_USER,
        user
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    }
}
