import store from '../store/store';
import conf from '../common/config/conf.json';
import axios from 'axios';

class GalleryApi {

    static getAllGalleries() {

        let token = sessionStorage.getItem('token');
        let url = conf.req.apiUrl + conf.req.webcamcollections;

        const request = new Request(url, {
            method: 'GET',
            headers: new Headers({
                'Authorisation': `${token}`
            }),

        });

        return fetch(request).then(response => {
            return response.json();
            console.log(response);
        }).catch(error => {
            console.log('sesAPI', error)
            return error;
        });
    }
}

export default GalleryApi;