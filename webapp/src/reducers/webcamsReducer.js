import * as types from '../actions/actionTypes';
import initialState from './initialState';

//  webcam reducer is for managing webcams from webcam.travel.com (opposite to savedWebcams reducer wich manages webcams from db)
export default function webcamsReducer(state = initialState.webcams, action) {

    switch (action.type) {
        case types.HIDE_WEBCAM: {
            state = state.filter((webcam) => {
                if (webcam.webcamID !== action.payload) {
                    return webcam;
                }
            });
            break;
        }
        case types.FETCH_WEBCAMS_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
    return state;
}