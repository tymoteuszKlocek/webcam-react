// @flow
import * as types from '../actions/actionTypes';
import initialState from './initialState';

type State = string;

type SetRouteAction = { type: 'SET_POSITION', payload: string };
type GetRouteAction = { type: 'GET_POSITION', payload: string };

type Action = SetRouteAction | GetRouteAction;
//currently not used - waiting for opinion
export default function routeReducer(state: State = initialState.routes, action: Action) {
    switch (action.type) {
        case types.SET_ROUTE: {
            return action.payload;
        }
        case types.GET_ROUTE: {
            return state;
        }
        default: {
            return state;
        }
    }
}