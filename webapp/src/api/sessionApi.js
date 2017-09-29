import conf from '../common/config/conf.json';
import store from '../store/store';
import axios from 'axios';

class SessionApi {

    static newHeaders() {
        let headers = new Headers();
        headers.append(
            'Auth-Token', sessionStorage.getItem('token')
        )
        return headers;
    }

    static login(credentials) {

        const request = new Request((conf.req.apiUrl + '/login'), {
            method: 'POST',
            headers: new Headers({
                'Auth-Token': 'test',
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
        console.log(this.newHeaders())
        let url = conf.req.apiUrl + '/logout';
        return axios.post(url, {
            headers: { 'authorisation': sessionStorage.getItem('token')}
        })
            .then(resp => {
                console.log('wowowowow', resp);
            }).catch(error => {
                return error;
            });
    }

    // static logout() {
    //     let state = store.getState();
    //     const headers = () => {
    //         return new Headers({
    //             'Content-Type': 'application/json',
    //             'Auth-Token': state.session.token
    //         });
    //     }
    //     const request = new Request((conf.req.apiUrl + '/logout'), {
    //         method: 'POST',
    //         headers: new Headers({
    //             'Content-Type': 'application/json'
    //         }),
    //         body: JSON.stringify({ ko: 'koko' })
    //     });
    //     console.log('req', request, headers)
    //     return fetch(request).then(response => {
    //         return response.json();
    //     }).catch(error => {
    //         console.log('sesAPI err', error)
    //         return error;
    //     })
    // }

    static refresh() {
        console.log('refresh');
    }
}

export default SessionApi;