export default class Geolocation {

    static getLocalisation() {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (response) {
                var position = response.coords.latitude.toFixed(5) + ',' + response.coords.longitude.toFixed(5);
                resolve(position);
            }, function (error) {
                reject(error);
            });
        });
    }
}

