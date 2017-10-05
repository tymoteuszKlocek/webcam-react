import conf from '../common/config/conf.json';
import axios from 'axios';

class SessionApi {

    static register(credentials) {
        const request = new Request((conf.req.apiUrl + '/register'), {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(credentials)
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            console.log('register API error ', error)
            return error;
        })
    }

    static login(credentials) {

        const request = new Request((conf.req.apiUrl + '/login'), {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(credentials)
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            console.log('sesAPI', error)
            return error;
        })
    }


    static logout() {
        let url = conf.req.apiUrl + '/logout';
        
        return axios.post(url, {
            headers: { 'Authorisation': sessionStorage.getItem('token')},
            
        })
            .then(resp => {
                console.log('response in logout', resp);
                return resp;
            }).catch(error => {
                return error;
            });
    }

    static refresh() {
        console.log('refresh');
    }
}

export default SessionApi;