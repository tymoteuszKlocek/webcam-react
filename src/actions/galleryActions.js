import SessionApi from '../api/sessionApi';
import conf from '../common/config/conf.json';

export function fetchGalleries() {

    return (dispatch) => {

        let url = conf.req.apiUrl + conf.req.webcamcollections;

        let params = {
            url: url,
            method: 'GET'
        }
        console.log('gall act', params);
        return SessionApi.loadData(params).then(response => {
            console.log(response)
            return response;
        }).catch(error => {
            throw (error);
        });
        // return function (dispatch) {
        //     console.log(123123)
        //     return SessionApi.loadData(params).then(response => {
        //         console.log(response)
        //         return response;
        //     }).catch(error => {
        //         throw (error);
        //     });
        // };
    }
}

export function deleteWebcam(id) {

    return (dispatch) => {
        dispatch({
            type: 'DELETE_WEBCAM',
            payload: id
        });
    };

}
