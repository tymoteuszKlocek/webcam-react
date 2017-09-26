import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sessionReducer(state = initialState.session, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            console.log(!!sessionStorage.token)
            return !!sessionStorage.token;
        }
        case types.LOGIN_ERROR: {
            return false
        }
        default: {
            return false;
        }
            
    }
}