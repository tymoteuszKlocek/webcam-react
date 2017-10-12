import * as types from '../actions/actionTypes';
import initialState from './initialState';

type State = Array<Object>;

type DeleteAction = { type: 'DELETE_WEBCAM', payload: Array<Object> };
type FetchAction = { type: 'FETCH_SAVED_WEBCAMS_SUCCESS', payload: Array<Object> };

type Action = DeleteAction | FetchAction;

// gallerydWebcams reducer is for managing webcams on db (opposite to webcams reducer wich manages webcams from webcam.travel.com )
export default function galleryWebcamsReducer(state: State = initialState.galleryWebcams, action: Action) {
    switch (action.type) {
        case types.DELETE_WEBCAM: {
            let deletedWebcamId = action.payload;
            return state.collection = state.filter((webcam) => {
                return webcam.webcamID !== deletedWebcamId;
            });
        }
        case types.FETCH_SAVED_WEBCAMS_SUCCESS: {
            return { ...state, collection: action.payload };
        }
        default: {
            return state;
        }
    }
}