import store from '../store/store';
import conf from '../common/config/conf.json';


class GalleryApi {

    static requestHeaders() {
        let state = store.getState();
        let token = state.session.token;
        return {
            'AUTHORISATION': `${token}`
        }
    }

    static getAllGalleries() {
        const headers = this.requestHeaders();
        const request = new Request(conf.req.apiUrl + conf.req.webcamcollections, {
            method: 'GET',
            headers: headers
        })
        console.log(request)
        return fetch(request).then(resp => {
            return resp.json();
        }).catch( error => {
            return error;
        })
    }
}

export default GalleryApi;