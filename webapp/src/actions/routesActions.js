//@flow

//not in use yet
import * as types from './actionTypes';

type Action = Object;
type Dispatch = (action: Action | Promise<Action>) => Promise<any>;

export function setRoute(route: string): Action {
    return (dispatch: Dispatch) => {
        dispatch({
            type: types.SET_ROUTE,
            payload: route,
        });

    };
}

export function getRoute(): Action {
    return (dispatch: Dispatch) => {
        dispatch({
            type: types.GET_ROUTE,
        });
    };
}