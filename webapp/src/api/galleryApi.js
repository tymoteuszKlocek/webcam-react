import store from '../store/store';
import conf from '../common/config/conf.json';
import axios from 'axios';

class GalleryApi {

    static getAllGalleries() {

        let token = sessionStorage.getItem('token');
        let url = conf.req.apiUrl + conf.req.webcamcollections;
        var myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Authorisation': token
        });

        console.log('req', myHeaders)
        return axios.get(url, {
            headers: myHeaders
        }).then(resp => {
            return resp.json();
        }).catch( error => {
            return error;
        })
    }

    // static getAllGalleries() {
    //     const headers = this.requestHeaders();
    //     const request = new Request(conf.req.apiUrl + conf.req.webcamcollections, {
    //         method: 'GET',
    //         headers: headers
    //     })

    //     let url = conf.req.apiUrl + conf.req.webcamcollections;

    //     console.log('req', request)
    //     return axios.get(url, {
    //         headers: this.requestHeaders()
    //     }).then(resp => {
    //         return resp.json();
    //     }).catch( error => {
    //         return error;
    //     })
    // }
}

export default GalleryApi;