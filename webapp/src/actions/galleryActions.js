import GalleryApi from '../api/galleryApi';
import conf from '../common/config/conf.json';
import * as types from './actionTypes';

export function fetchGalleries() {

    return (dispatch) => {

        let params = {
            url: conf.req.webcamcollections,
            method: 'GET'
        }

        return GalleryApi.getAllGalleries(params).then(response => {
            dispatch(fetchGalleriesSucces(response))
        }).catch(error => {
            throw (error);
        });
    }
}

export function fetchGalleriesSucces(resp) {
    return { type: types.FETCH_GALLERIES_SUCCESS, payload: resp}
}

export function deleteWebcam(id) {

    return (dispatch) => {
        dispatch({
            type: 'DELETE_WEBCAM',
            payload: id
        });
    };

}
