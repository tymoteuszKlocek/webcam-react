// @flow
import * as types from '../actions/actionTypes';
import initialState from './initialState';

type State = Array<Object>;

type FetchAction = { type: 'FETCH_GALLERIES_SUCCESS', payload: Array<Object> };

export default function galleryReducer(state: State = initialState.galleries, action: FetchAction) {
    switch (action.type) {
        case types.FETCH_GALLERIES_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
