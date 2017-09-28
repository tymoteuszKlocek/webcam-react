import WebcamApi from '../api/webcamApi';
import * as types from './actionTypes';

export function fetchWebcamSuccess(resp) {
    return { type: types.FETCH_WEBCAMS_SUCCESS, payload: resp }
}

export function fetchSavedWebcamSuccess(resp) {
    return { type: types.FETCH_SAVED_WEBCAMS_SUCCESS, payload: resp }
}

export function fetchWebcams(url) {

    return function (dispatch) {
        WebcamApi.fetchNewWebcams(url).then(resp => {
            dispatch(fetchWebcamSuccess(resp));
        })
            .catch(function (error) {
                dispatch({ type: 'FETCH_WEBCAMS_ERROR', payload: error });
            });
    }
}

export function deleteWebcam(id) {

    return (dispatch) => {
        dispatch({
            type: 'DELETE_WEBCAM',
            payload: id
        });
    };
}

export function uploadWebcams(id) {
    return (dispatch) => {
        WebcamApi.fetchSavedWebcams(id).then(resp => {
            dispatch(fetchSavedWebcamSuccess(resp));
        })
            .catch(function (error) {
                dispatch({ type: 'FETCH_WEBCAMS_ERROR', payload: error });
            });
    };
}

export function getPosition() {

    return (dispatch) => {
        dispatch({
            type: 'GET_POSITION'
        });
    };
}