import conf from '../common/config/conf.json';
import axios from 'axios';

class SessionApi {

    static register(credentials) {

        const request = new Request((conf.req.apiUrl + '/register'), {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(credentials),
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            console.log(error)
            return error;
        })
    }

    static login(credentials) {

        const request = new Request((conf.req.apiUrl + '/login'), {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(credentials),
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            console.log(error)
            return error;
        })
    }

    static logout() {

        const url = conf.req.apiUrl + '/logout';

        return axios({
            method: 'post',
            url: url,
            headers: { 'Authorisation': sessionStorage.getItem('token') },
        })
            .then(resp => {
                return resp;
            }).catch(error => {
                return error;
            });
    }

}

export default SessionApi;