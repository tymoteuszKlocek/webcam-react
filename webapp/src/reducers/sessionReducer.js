//@flow
import * as types from '../actions/actionTypes';
import initialState from './initialState';

type State = {
    session: {
        token: string,
        error: any,
        message: any
    }
};

type LoginSuccessAction = { type: 'LOGIN_SUCCESS', payload: { token: string } };
type LoginErrorAction = { type: 'LOGIN_ERROR', payload: { token: string, error: any } };
type LogoutSuccessAction = { type: 'LOGOUT_SUCCESS', payload: { token: string } };
type LogoutErrorAction = { type: 'LOGOUT_ERROR', payload: { token: string, error: any } };
type RegisterSuccessAction = { type: 'LOGOUT_SUCCESS', payload: { token: string, message: any } };
type RegisterErrorAction = { type: 'LOGOUT_ERROR', payload: { token: string, error: any } };


type Action = LoginSuccessAction
    | LogoutSuccessAction
    | LoginErrorAction
    | LogoutErrorAction
    | RegisterSuccessAction
    | RegisterErrorAction;

export default function sessionReducer(state: State = initialState.session, action: Action) {
    //TODO token remove hardcode
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            return { ...state, token: action.payload.token };
        }
        case types.LOGIN_ERROR: {
            return { ...state, token: '', error: action.payload.error };
        }
        case types.LOGOUT_SUCCESS: {
            return { ...state, token: '', error: action.payload };
        }
        case types.LOGOUT_ERROR: {
            return { ...state, token: '', error: action.payload };
        }
        case types.REGISTER_SUCCESS: {
            return { ...state, token: '', message: action.payload.success, };
        }
        case types.REGISTER_ERROR: {
            return { ...state, token: '', error: action.payload.error, };
        }
        default: {
            return state;
        }
    }
}