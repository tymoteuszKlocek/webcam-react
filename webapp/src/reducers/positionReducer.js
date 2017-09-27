import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function positionReducer(state = initialState.position, action) {
    switch (action.type) {
        case types.SET_POSITION: {
            state = { ...state, position: action.payload };
            break;
        }
        case types.GET_POSITION: {
            return state;
        }
        default: {
            return state;
        }
    }
    return state;
}