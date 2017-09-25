import axios from 'axios';
import conf from '../common/config/conf.json';
import Geolocation from '../common/services/geolocation';

export function fetchWebcams(url) {

    return function (dispatch) {
        
        axios.get(url, {
            headers: { 'X-Mashape-Authorization': conf.webcamSearch.API_KEY }
        })
        .then(resp => {
            let data = resp.data.result.webcams;
            let webcams = [];
            
            data.forEach((cam) => {
                let webcam = {
                    webcamID: cam.id,
                    city: cam.location.city,
                    country: cam.location.country,
                    countryCode: cam.location.country_code,
                    views: cam.statistics.views,
                    lat: cam.location.latitude,
                    lng: cam.location.longitude,
                    position: cam.location.latitude.toFixed(3) + ',' + cam.location.longitude.toFixed(3),
                    thumbnail: cam.image.current.preview,
                    title: cam.title,
                    link: cam.url.current.desktop,
                    type: 'scanner',
                    showWebcam: 'thumbnail show'
                }
                webcams.push(webcam);
            });

            dispatch({ type: 'DISPLAY_WEBCAMS', payload: webcams });
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

export function setPosition() {
    return (dispatch) => {
        Geolocation.getLocalisation().then(pos => {
            dispatch({
                type: 'SET_POSITION',
                payload: pos
            });
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