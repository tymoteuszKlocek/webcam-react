import * as types from './actionTypes';
import SessionApi from '../api/sessionApi';

export function loginSuccess() {
    return { type: types.LOGIN_SUCCESS }
}

export function loginError() {
    return { type: types.LOGIN_ERROR }
}

export function loginUser(credentials) {

    return function (dispatch) {
        return SessionApi.login(credentials).then(response => {
            console.log(response)
            sessionStorage.setItem('token', response.token);
            if (response.token) {
                dispatch(loginSuccess());
            } else {
                dispatch(loginError());
            }
        }).catch(error => {
            throw (error);
        });
    };
}