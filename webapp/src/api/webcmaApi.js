import conf from './common/config';

export default class WebcamApi {

    static newWebcamsRequestHeaders() {
        return {
            'X-Mashape-Authorization': conf.webcamSearch.API_KEY
        }
    }

    static myWebcamsRequestHeaders() {
        return {
            'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
        }
    }

    static getNewWebcams() {
        const headers = this.newWebcamsRequestHeaders();
        const request = new Request('https://webcamstravel.p.mashape.com/webcams/list/', {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(resp => {
            return resp.json();
        }).catch(error => {
            return error;
        });
    }

    static getMyWebcams() {
        const headers = this.myWebcamsRequestHeaders();
        const request = new Request('http://localhost:5000/webcams', {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(resp => {
            return resp.json();
        }).catch(error => {
            return error;
        });
    }

}