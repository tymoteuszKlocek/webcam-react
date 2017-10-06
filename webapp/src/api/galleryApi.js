import conf from '../common/config/conf.json';
import axios from 'axios';

class GalleryApi {

    static myWebcamsRequestHeaders() {
        let token = sessionStorage.getItem('token');
        return {
            'content-type': 'application/json',
            'Authorisation': `${token}`,
        }
    }

    static getAllGalleries() {

        const url = conf.req.apiUrl + conf.req.webcamcollections;
        const headers = this.myWebcamsRequestHeaders();
        const token = sessionStorage.getItem('token');

        return axios.get(url, {
            headers: headers,
            withCredentials: true,
        }).then(response => {
            return response.data;
        }).catch(err => {
            console.log(err);
        });
    }

    static saveGallery(name) {
        const url = conf.req.apiUrl + conf.req.webcamcollections;
        const headers = this.myWebcamsRequestHeaders();

        return axios.put(url, {
            headers: headers,
            withCredentials: true,
            body: { name: name },
        }).then(resp => {
            return resp;
        }).catch(err => {
            console.log(err);
        });
    }

    static deleteGallery(id) {
        const url = conf.req.apiUrl + conf.req.webcamcollections;
        const headers = this.myWebcamsRequestHeaders();

        return axios.delete(url, {
            headers: headers,
            withCredentials: true,
            params: { id: id },
        }).then(resp => {
            return resp;
        }).catch(err => {
            console.log(err);
        });
    }

}

export default GalleryApi;