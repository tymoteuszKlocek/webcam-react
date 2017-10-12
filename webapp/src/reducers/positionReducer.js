// @flow
import * as types from '../actions/actionTypes';
import initialState from './initialState';

type State = string;

type SetPositionAction = { type: 'SET_POSITION', payload: string };
type GetPositionAction = { type: 'GET_POSITION', payload: string };

type Action = SetPositionAction | GetPositionAction;

export default function positionReducer(state: State = initialState.position, action: Action) {
    switch (action.type) {
        case types.SET_POSITION: {
            state = action.payload;
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