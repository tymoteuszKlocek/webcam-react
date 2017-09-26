import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function webcamsReducer(state = initialState.webcams, action) {
    switch (action.type) {
        case types.SAVE_WEBCAM: {
            state = { ...state, webcams: action.payload };
            console.log('save webcams', state)
            break;
        }
        // TODO: I don't want to store every response, just last one to display it
        case types.DISPLAY_WEBCAMS: {
            state = action.payload;
            break;
        }
        case types.DELETE_WEBCAM: {
            state = state.filter((webcam) => webcam.webcamID !== action.payload);
            break;
        }
        case types.FETCH_WEBCAMS: {
            console.log('fetch webcams in reducer')
            //TODO put this in SAVE_WEBCAMS and test
            state = { ...state, webcams: action.payload };
            break;
        }
        default: {
            return state;
        }
    }
    return state;
};