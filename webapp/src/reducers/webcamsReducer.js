//@flow
import * as types from '../actions/actionTypes';
import initialState from './initialState';

type State = {
    collection: Array<Object>
};

type HideWebcamAction = { type: 'HIDE_WEBCAM', payload: Object };
type FetchAction = { type: 'FETCH_WEBCAMS_SUCCESS', payload: Object };

type Action = HideWebcamAction | FetchAction;

//  webcam reducer is for managing webcams from webcam.travel.com (opposite to galleryWebcams reducer wich manages webcams from db)
export default function webcamsReducer(state: State = initialState.webcams, action: Action) {

    switch (action.type) {
        case types.HIDE_WEBCAM: {
            let deletedWebcamId: Object = action.payload;
            let newCollection = [];
            state.collection.map((webcam) => {
                if (webcam.webcamID !== deletedWebcamId) {
                    newCollection.push(webcam)
                }
            });
            return { ...state, collection: newCollection };
        }
        case types.FETCH_WEBCAMS_SUCCESS: {
            return { ...state, collection: action.payload };
        }
        case types.FETCH_WEBCAMS_ERROR: {
            return { ...state, error: action.payload };
        }
        default: {
            return state;
        }
    }
}