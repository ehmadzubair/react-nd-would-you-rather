import {_getUsers} from '../files/_DATA'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const LOGIN_USER = 'LOGIN_USER'

export function getLoginData() {
    return (dispatch) => {
        return _getUsers().then((users) => {
            console.log('users')
            dispatch(receiveLoginData(users))
        }

        )
    }
}

export function receiveLoginData(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}
