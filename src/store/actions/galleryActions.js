import axios from 'axios';
import conf from '../../common/config/conf.json';

export function fetchGalleries() {

    return (dispatch) => {

        let url = conf.req.apiUrl + conf.req.webcamcollections;
        let galleries;
        console.log('gall act')
        axios.get(url).then(resp => {
            console.log('galleries', resp);
            galleries = resp;
            dispatch({ type: 'DISPLAY_GALLERIES', payload: galleries });
        }).catch(function (error) {
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
