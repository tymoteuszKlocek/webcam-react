import conf from '../common/config/conf.json';
import store from '../store/store';

class SessionApi {

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

    static logout(params) {
        let state = store.getState();
        const request = new Request((conf.req.apiUrl + params.url), {
            method: params.method,
            headers: new Headers({
                'Content-Type': 'application/json',
                'Auth-Token': state.session.token
            }),
            body: JSON.stringify()
        });

        return fetch(request).then(response => {
            console.log('sesAPI response', response)
            return response.json();
        }).catch(error => {
            console.log('sesAPI err', error)
            return error;
        })
    }

    static refresh() {
        console.log('refresh');
    }
}

export default SessionApi;