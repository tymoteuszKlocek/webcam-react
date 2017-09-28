import conf from '../common/config/conf';
import axios from 'axios';
import store from '../store/store';

export default class WebcamApi {

    static newWebcamsRequestHeaders() {
        return {
            'X-Mashape-Authorization': conf.webcamSearch.API_KEY
        }
    }

    static myWebcamsRequestHeaders() {
        let state = store.getState();
        let token = state.session.token;
        return {
            'AUTHORISATION': `${token}`
        }
    }

    static fetchNewWebcams(params) {

        let url = conf.webcamSearch.SRC + params
        return axios.get(url, {
            headers: this.newWebcamsRequestHeaders()
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
                return webcams;

            }).catch(error => {
                return error;
            });
    }

    static fetchSavedWebcams(id) {

        let url = conf.req.apiUrl + conf.req.webcams + id;
        const headers = this.myWebcamsRequestHeaders();
        const request = new Request(url, {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(resp => {
            console.log(1212, resp);
            return resp.json();
        }).catch(error => {
            return error;
        });
    }

}

export function parseJSON(response) {
    return response.json();
}
