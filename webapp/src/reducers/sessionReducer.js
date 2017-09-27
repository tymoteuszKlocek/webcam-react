import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sessionReducer(state = initialState.session, action) {
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