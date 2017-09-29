import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function savedWebcamsReducer(state = initialState.savedWebcams, action) {
    switch (action.type) {
        // case types.SAVE_WEBCAM: {
        //     state = { ...state, webcams: action.payload };
        //     console.log('save webcams', state)
        //     break;
        // }
        // // TODO: I don't want to store every response, just last one to display it
        // case types.DISPLAY_WEBCAMS: {
        //     state = { ...state, webcams: action.payload };
        //     break;
        // }
        // case types.DELETE_WEBCAM_FROM_SAVED: {
        //     state = state.filter((webcam) => webcam.webcamID !== action.payload);
        //     break;
        // }
        case types.FETCH_SAVED_WEBCAMS_SUCCESS: {
            state = { ...state, savedWebcams: action.payload };
            break;
        }
        default: {
            return state;
        }
    }
    return state;
}