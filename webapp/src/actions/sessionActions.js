import * as types from './actionTypes';
import SessionApi from '../api/sessionApi';

export function loginSuccess(resp) {
    return { type: types.LOGIN_SUCCESS, payload: resp }
}

export function loginError() {
    return { type: types.LOGIN_ERROR }
}

export function loginUser(credentials) {

    return function (dispatch) {

        return SessionApi.login(credentials).then(response => {
            if (response.token) {
                sessionStorage.setItem('token', response.token);
                dispatch(loginSuccess(response));
            } else {
                dispatch(loginError());
            }
        }).catch(error => {
            throw (error);
        });
    };
}

export function logout() {

    return function (dispatch) {

        return SessionApi.logout().then(resp => {
            sessionStorage.setItem('token', '');
            console.log(resp);
            dispatch(logoutSuccess());
        }).catch(error => {
            console.log(error);
        })
    }
}

export function logoutSuccess() {
    return { type: types.LOGOUT_SUCCESS }
}