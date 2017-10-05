import * as types from '../actions/actionTypes';
import initialState from './initialState';

// savedWebcam reducer is for managing webcams on db (opposite to webcams reducer wich manages webcams from webcam.travel.com )
export default function savedWebcamsReducer(state = initialState.savedWebcams, action) {
    switch (action.type) {
        // Why this doesn't work?
        case types.DELETE_WEBCAM: {
            let deletedWebcamId = action.payload
            return state = state.filter((webcam) => {
                console.log('webcam.webcamID', webcam.webcamID, 'deletedWebcamId', deletedWebcamId)
                webcam.webcamID !== deletedWebcamId;
            });
        }
        case types.FETCH_SAVED_WEBCAMS_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}