//@flow
import Geolocation from '../common/services/geolocation';
import * as types from './actionTypes';

type Action = Object;
type Dispatch = (action: Action | Promise<Action>) => Promise<any>;

export function setPosition(): Action {
    return (dispatch: Dispatch) => {

        Geolocation.getLocalisation().then((pos: string) => {
            dispatch({
                type: types.SET_POSITION,
                payload: pos,
            });
        });
        
    };
}

export function getPosition(): Action {
    return (dispatch: Dispatch) => {
        dispatch({
            type: types.GET_POSITION,
        });
    };
}