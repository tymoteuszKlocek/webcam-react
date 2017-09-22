import Geolocation from '../../common/services/geolocation';

export function setPosition() {

    return (dispatch) => {

        Geolocation.getLocalisation().then(pos => {
            dispatch({
                type: 'SET_POSITION',
                payload: pos
            });
        });
        
    };
}

export function getPosition() {
    return (dispatch) => {
        dispatch({
            type: 'GET_POSITION'
        });
    };
}