import axios from 'axios';
import conf from '../common/config/conf.json';

export function fetchWebcams(url) {
    return function(dispatch) {
        console.log('action run2')
        axios.get(url, {
            headers: { 'X-Mashape-Authorization': conf.webcamSearch.API_KEY }
        }).then(resp => {
            console.log('fetched data', resp.data.result.webcams)
            dispatch({type: 'SAVE_WEBCAMS', payload: resp.data.result.webcams})
        }).catch(function (error) {
            dispatch({type: 'FETCH_WEBCAMS_ERROR', payload: error})
        });
    }
}

export function deleteWebcam(id) {
    return {
        type: 'DELETE_WEBCAM',
        payload: id
    };
}