class SessionApi {
    static login(credentials) {

        const request = new Request(('http://localhost:3030/login'), {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(credentials )///coś nie cyka
        });

        return fetch(request).then(response => {
            console.log('sesAPI', response)
            return response.json();
        }).catch(error => {
            console.log('sesAPI', error)
            return error;
        })
    }
}

export default SessionApi;