class SessionApi {

    static login(credentials) {

        const request = new Request(('http://localhost:3030/login'), {
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

    static loadData(params) {
            let token = sessionStorage.getItem('token')
                const request = new Request(('http://localhost:3030/'+ params.url), {
                    method: params.method,
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'Auth-Token': token
                    }),
                    body: JSON.stringify(params.body)
                });
        
                return fetch(request).then(response => {
                    console.log('sesAPI response', response)
                    return response.json();
                }).catch(error => {
                    console.log('sesAPI err', error)
                    return error;
                })
            }
}

export default SessionApi;