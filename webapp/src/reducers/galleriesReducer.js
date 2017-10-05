import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function galleryReducer(state = initialState.galleries, action) {
    switch (action.type) {
        case types.FETCH_GALLERIES_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
