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
                dispatch(loginError(response));
            }

        }).catch(error => {
            throw (error);
        });
    };
}

function loginSuccess(resp): Action {
    return { type: types.LOGIN_SUCCESS, payload: resp }
}

function loginError(resp): Action {
    return { type: types.LOGIN_ERROR, payload: resp }
}

// logout
export function logout(): Action {
    return function (dispatch: Dispatch) {

        return SessionApi.logout().then(() => {
            dispatch(logoutSuccess());
            sessionStorage.removeItem('token');
            localStorage.removeItem('webcam-app-state');
        }).catch(error => {
            console.log(error);
        })
    }
}

function logoutSuccess(): Action {
    return { type: types.LOGOUT_SUCCESS, payload: undefined }
}

// function logoutError(resp) {
//     return { type: types.LOGOUT_ERROR, payload: resp.error }
// }


// register
export function registerUser(credentials: Object): Action {
    return function (dispatch: Dispatch) {

        return SessionApi.register(credentials).then(resp => {

            if (resp.success) {
                dispatch(registerSuccess(resp));
            }
            else {
                dispatch(registerError(resp.error));
            }

        }).catch(error => {
            dispatch(registerError(error));
        })
    }
}

function registerSuccess(resp): Action {
    return { type: types.REGISTER_SUCCESS, payload: resp }
}

function registerError(resp): Action {
    return { type: types.REGISTER_ERROR, payload: resp }
}
