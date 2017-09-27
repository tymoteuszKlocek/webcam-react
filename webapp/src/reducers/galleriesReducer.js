import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function galleryReducer(state = initialState.galleries, action) {
    switch (action.type) {
        case types.FETCH_GALLERIES_SUCCESS: {
            state = { ...state, gallery: action.payload };
            console.log('state gallery', state)
            break;
        }
        case types.DISPLAY_GALLERIES: {
            state = { ...state, gallery: action.payload };
            console.log('state gallery', state)
            break;
        }
        default: {
            return state;
        }
    }
    return state;
}
