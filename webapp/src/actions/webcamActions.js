//@flow
import WebcamApi from '../api/webcamApi';
import * as types from './actionTypes';

type Action = Object;

type Dispatch = (action: Action | Promise<Action>) => Promise<any>;

type Webcam = {
    webcamID: string,
    city: string,
    country: string,
    countryCode: string,
    views: string,
    lat: string,
    lng: string,
    position: string,
    thumbnail: string,
    title: string,
    link: string,
    type: string,
    showWebcam: string
}

// for API from webcams.travel.com

export function fetchWebcams(url: string) {
    return function (dispatch: Dispatch) {

        WebcamApi.fetchNewWebcams(url)
            .then(resp => {
                if (!!resp.data && resp.data.status === 'OK') {
                    let data = resp.data.result.webcams;
                    let webcams: Array<Object> = [];

                    data.forEach((webcam) => {
                        let webcamItem: Webcam = {
                            webcamID: webcam.id,
                            city: webcam.location.city,
                            country: webcam.location.country,
                            countryCode: webcam.location.country_code,
                            views: webcam.statistics.views,
                            lat: webcam.location.latitude,
                            lng: webcam.location.longitude,
                            position: webcam.location.latitude.toFixed(3) + ',' + webcam.location.longitude.toFixed(3),
                            thumbnail: webcam.image.current.preview,
                            title: webcam.title,
                            link: webcam.url.current.desktop,
                            type: 'scanner',
                            showWebcam: 'thumbnail show',
                        };
                        webcams.push(webcamItem);
                    });
                    dispatch(fetchWebcamSuccess(webcams));
                } else {
                    dispatch({ type: types.FETCH_WEBCAMS_ERROR, payload: resp });
                }
            })
            .catch(function (error) {
                dispatch({ type: types.FETCH_WEBCAMS_ERROR, payload: error });
            });
    }
}

function fetchWebcamSuccess(resp) {
    return { type: types.FETCH_WEBCAMS_SUCCESS, payload: resp }
}

// hide webcam fetched from webwebcam.travel.com
export function hideWebcam(id: string) {
    return (dispatch: Dispatch) => {
        dispatch({ type: types.HIDE_WEBCAM, payload: id });
    }
}

// save webcam fetched from webwebcam.travel.com
export function saveWebcam(galleryId: string, webcam: Object) {

    WebcamApi.saveWebcam(galleryId, webcam)
        .then(() => {
            uploadWebcams(galleryId);
        });
}

//***********************************************

// for my API (saved on backend in gallery table)
export function uploadWebcams(galleryID: string): Action {
    return (dispatch: Dispatch) => {

        WebcamApi.fetchgalleryWebcams(galleryID)
            .then(resp => {
                dispatch(fetchGalleryWebcamSuccess(resp));
            })
            .catch(function (error) {
                dispatch({ type: types.FETCH_WEBCAMS_ERROR, payload: error });
            });
    };
}

function fetchGalleryWebcamSuccess(resp: Object): Action {
    return { type: types.FETCH_SAVED_WEBCAMS_SUCCESS, payload: resp }
}

// delete webcam on our database (webcams table)
export function deleteWebcam(webcam: Object): Action {

    const collectionID: string = webcam.collectionID;

    return (dispatch: Dispatch) => {
        
        WebcamApi.deleteWebcam(webcam)
            .then((resp) => {
                if (resp.success) {
                    dispatch(uploadWebcams(collectionID));
                }
                else {
                    dispatch({ type: types.DELETE_WEBCAM_ERROR, payload: resp });
                }
            })
            .catch(function (error) {
                dispatch({ type: types.DELETE_WEBCAM_ERROR, payload: error });
            });
    };
}