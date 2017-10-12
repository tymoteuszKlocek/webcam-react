//@flow
import conf from '../common/config/conf';
import axios from 'axios';

export default class WebcamApi {

    static newWebcamsRequestHeaders() {
        return {
            'X-Mashape-Authorization': conf.webcamSearch.API_KEY,
        };
    }

    static myWebcamsRequestHeaders() {
        const token: string = sessionStorage.getItem('token');
        return {
            'content-type': 'application/json',
            'Authorisation': `${token}`,
        };
    }

    static fetchNewWebcams(params: string) {

        const url = conf.webcamSearch.SRC + params;

        return axios({
            method: 'get',
            url: url,
            headers: this.newWebcamsRequestHeaders(),
        }).then(resp => {
            return resp;
        }).catch(error => {
            return error;
        });
    }

    static fetchgalleryWebcams(id: string) {

        const url = conf.req.apiUrl + conf.req.webcams + id;
        const headers = this.myWebcamsRequestHeaders();

        return axios({
            method: 'get',
            url: url,
            headers: headers,
        }).then(resp => {
            return resp.data;
        }).catch(error => {
            return error;
        });
    }

    static saveWebcam(galleryId: string, webcam: Object) {

        const url = conf.req.apiUrl + conf.req.webcams;
        const headers = this.myWebcamsRequestHeaders();
        const requestObj = {
            webcam: webcam,
            collectionID: galleryId,
        };

        return axios({
            method: 'put',
            url: url,
            headers: headers,
            data: requestObj,
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
            collectionID: webcam.collectionID,
        };
        // TODO - change to delete method
        return axios({
            method: 'post',
            url: url,
            headers: headers,
            data: requestObj,
        }).then(resp => {
            if (resp.data.success === true) {
                return resp.data;
            } else {
                return resp.data.error;
            }
        }).catch(err => {
            console.log(err);
        });
    }
}