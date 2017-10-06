//@flow
import * as types from '../actions/actionTypes';
import initialState from './initialState';

type State = { token: string };

type LoginSuccessAction = { type: 'LOGIN_SUCCESS', payload: { token: string } };
type LogoutSuccessAction = { type: 'LOGOUT_SUCCESS', payload: { token: string } };
type LoginErrorAction = { type: 'LOGIN_ERROR', payload: { token: string } };

type Action = LoginSuccessAction | LogoutSuccessAction | LoginErrorAction;

export default function sessionReducer(state: State = initialState.session, action: Action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            return { ...state, token: action.payload.token };
        }
        case types.LOGOUT_SUCCESS: {
            return { ...state, token: '' };
        }
        case types.LOGIN_ERROR: {
            return state;
        }
        default: {
            return state;
        }

    }
}