import WebcamApi from '../api/webcamApi';
import * as types from './actionTypes';

// for API from webcams.travel.com
function fetchWebcamSuccess(resp) {
    return { type: types.FETCH_WEBCAMS_SUCCESS, payload: resp }
}

export function fetchWebcams(url) {

    return function (dispatch) {
        WebcamApi.fetchNewWebcams(url)
            .then(resp => {
                dispatch(fetchWebcamSuccess(resp));
            })
            .catch(function (error) {
                dispatch({ type: types.FETCH_WEBCAMS_ERROR, payload: error });
            });
    }
}

// hide webcam fetched from webcam.travel.com
export function hideWebcam(id) {
    return (dispatch) => {
        dispatch({ type: types.HIDE_WEBCAM, payload: id })
    }
}

// save webcam fetched from webcam.travel.com
export function saveWebcam(galleryId, webcam) {
    WebcamApi.saveWebcam(galleryId, webcam)
        .then(() => {
            uploadWebcams(galleryId);
        });
}

// for my API (saved on backend in gallery table)
function fetchSavedWebcamSuccess(resp) {
    return { type: types.FETCH_SAVED_WEBCAMS_SUCCESS, payload: resp }
}

export function uploadWebcams(galleryID) {
    return (dispatch) => {
        WebcamApi.fetchSavedWebcams(galleryID)
            .then(resp => {
                dispatch(fetchSavedWebcamSuccess(resp));
            })
            .catch(function (error) {
                dispatch({ type: types.FETCH_WEBCAMS_ERROR, payload: error });
            });
    };
}

// delete webcam on our database (webcams table)
export function deleteWebcam(webcam) {

    const collectionID = webcam.collectionID;

    return (dispatch) => {
        WebcamApi.deleteWebcam(webcam)
            .then((resp) => {
                if (resp.success) {
                    dispatch(uploadWebcams(collectionID));
                }
            })
            .catch(function (error) {
                dispatch({ type: types.DELETE_WEBCAM_ERROR, payload: error });
            });
    };
}