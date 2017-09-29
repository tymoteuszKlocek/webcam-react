import GalleryApi from '../api/galleryApi';
import * as types from './actionTypes';

export function fetchGalleries() {

    return (dispatch) => {

        return GalleryApi.getAllGalleries().then(response => {
            console.log(response);
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
