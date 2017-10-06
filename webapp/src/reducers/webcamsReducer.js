//@flow
import * as types from '../actions/actionTypes';
import initialState from './initialState';

type State = Array<Object>;

type HideWebcamAction = { type: 'HIDE_WEBCAM', payload: Array<Object> };
type FetchAction = { type: 'FETCH_WEBCAMS_SUCCESS', payload: Array<Object> };

type Action = HideWebcamAction | FetchAction;

//  webcam reducer is for managing webcams from webcam.travel.com (opposite to savedWebcams reducer wich manages webcams from db)
export default function webcamsReducer(state: State = initialState.webcams, action: Action) {

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