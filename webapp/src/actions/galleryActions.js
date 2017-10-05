import GalleryApi from '../api/galleryApi';
import * as types from './actionTypes';

export function fetchGalleries() {
    return (dispatch) => {
        return GalleryApi.getAllGalleries()
            .then((response, err) => {
                if (err) {
                    dispatch(fetchGalleriesError(err))
                } else {
                    dispatch(fetchGalleriesSuccess(response))
                }
            }).catch(error => {
                fetchGalleriesError(error)
            });
    }
}

function fetchGalleriesSuccess(resp) {
    return { type: types.FETCH_GALLERIES_SUCCESS, payload: resp }
}

function fetchGalleriesError(resp) {
    return { type: types.FETCH_GALLERIES_ERROR, payload: resp }
}

export function saveGallery(name) {
    return (dispatch) => {
        return GalleryApi.saveGallery(name)
        .then(resp => {
            console.log(resp);
            dispatch(fetchGalleries())
        });
    }
}

export function deleteGallery(id) {
    return (dispatch) => {
        return GalleryApi.deleteGallery(id)
        .then(resp => {
            console.log(resp);
            dispatch(fetchGalleries())
        });
    }
}

