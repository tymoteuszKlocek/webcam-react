import * as types from './actionTypes';
import SessionApi from '../api/sessionApi';

// login

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

function loginSuccess(resp) {
    return { type: types.LOGIN_SUCCESS, payload: resp }
}

function loginError() {
    return { type: types.LOGIN_ERROR }
}

//logout

export function logout() {

    return function (dispatch) {

        return SessionApi.logout().then(resp => {
            sessionStorage.removeItem('token');
            dispatch(logoutSuccess());
        }).catch(error => {
            console.log(error);
        })
    }
}

function logoutSuccess() {
    return { type: types.LOGOUT_SUCCESS }
}

// function logoutError() {
//     return { type: types.LOGOUT_ERROR }
// }

export function registerUser(credentials) {
    
        return function (dispatch) {
    
            return SessionApi.register(credentials).then(resp => {
                console.log('register done', resp)
                //dispatch(registerSuccess());
            }).catch(error => {
                console.log(error);
            })
        }
    }