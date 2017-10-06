//@flow
import GalleryApi from '../api/galleryApi';
import * as types from './actionTypes';

type Action = Object;
type Dispatch = (action: Action | Promise<Action>) => Promise<any>;

export function fetchGalleries(): Action {
    return (dispatch: Dispatch): Promise<Action> => {
        return GalleryApi.getAllGalleries()
            .then((response, err) => {
                if (err) {
                    dispatch(fetchGalleriesError(err));
                } else {
                    dispatch(fetchGalleriesSuccess(response));
                }
            }).catch(error => {
                fetchGalleriesError(error);
            });
    }
}

function fetchGalleriesSuccess(resp: Object): Action {
    return { type: types.FETCH_GALLERIES_SUCCESS, payload: resp }
}

function fetchGalleriesError(resp: Object): Action {
    return { type: types.FETCH_GALLERIES_ERROR, payload: resp }
}

export function saveGallery(name: string): Action {
    return (dispatch: Dispatch) => {
        return GalleryApi.saveGallery(name)
            .then(resp => {
                dispatch(fetchGalleries());
            });
    }
}

export function deleteGallery(id: string): Action {
    return (dispatch: Dispatch) => {
        return GalleryApi.deleteGallery(id)
            .then(resp => {
                dispatch(fetchGalleries());
            });
    }
}

