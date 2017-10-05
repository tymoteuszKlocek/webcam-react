import conf from '../common/config/conf';
import axios from 'axios';

export default class WebcamApi {

    static newWebcamsRequestHeaders() {
        return {
            'X-Mashape-Authorization': conf.webcamSearch.API_KEY
        }
    }

    static myWebcamsRequestHeaders() {
        let token = sessionStorage.getItem('token');
        return {
            'content-type': 'application/json',
            'Authorisation': `${token}`
        }
    }

    static fetchNewWebcams(params) {

        const url = conf.webcamSearch.SRC + params
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

        const url = conf.req.apiUrl + conf.req.webcams + id;
        const headers = this.myWebcamsRequestHeaders();
        const request = new Request(url, {
            method: 'GET',
            headers: headers
        });

        return axios.get(url, {
            headers: headers
        })
            .then(resp => {
                return resp.data;
            }).catch(error => {
                return error;
            });
    }

    static saveWebcam(galleryId, webcam) {

        const url = conf.req.apiUrl + conf.req.webcams;
        const headers = this.myWebcamsRequestHeaders();
        const requestObj = {
            webcam: webcam,
            collectionID: galleryId
        };

        return axios.put(url, {
            headers: headers,
            body: requestObj,
        }).then(resp => {
            return resp;
        }).catch(err => {
            console.log(err);
        });
    }

    static deleteWebcam(webcam) {

        const url = conf.req.apiUrl + conf.req.webcams + 'delete/';
        const headers = this.myWebcamsRequestHeaders();
        const requestObj = {
            webcamID: webcam.webcamID,
            collectionID: webcam.collectionID /// you should send id (but u nedd two ids)
        };

        return axios.post(url, {
            headers: headers,
            params: requestObj
        }).then(resp => {
            console.log('deleted', resp)
            if (resp.data.success === true) {
                return resp.data;
            }
        }).catch(err => {
            console.log(err);
        });
    }
}

export function parseJSON(response) {
    return response.json();
}
