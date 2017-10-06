//@flow
import * as types from './actionTypes';
import SessionApi from '../api/sessionApi';

type Action = Object;
type Dispatch = (action: Action | Promise<Action>) => Promise<any>;

// login
export function loginUser(credentials: Object): Action {
    return function (dispatch: Dispatch) {
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

function loginSuccess(resp): Action {
    return { type: types.LOGIN_SUCCESS, payload: resp }
}

function loginError(): Action {
    return { type: types.LOGIN_ERROR }
}

//logout

export function logout(): Action {
    return function (dispatch: Dispatch) {
        return SessionApi.logout().then(resp => {
            sessionStorage.removeItem('token');
            dispatch(logoutSuccess());
        }).catch(error => {
            console.log(error);
        })
    }
}

function logoutSuccess(): Action {
    return { type: types.LOGOUT_SUCCESS }
}

// function logoutError() {
//     return { type: types.LOGOUT_ERROR }
// }

export function registerUser(credentials: Object): Action {
    return function (dispatch: Dispatch) {
        return SessionApi.register(credentials).then(resp => {
            //dispatch(registerSuccess());
        }).catch(error => {
            console.log(error);
        })
    }
}