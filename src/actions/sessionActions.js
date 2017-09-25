import * as types from './actionTypes';  
import SessionApi from '../api/sessionApi';

export function loginSuccess() {  
  return {type: types.LOG_IN_SUCCESS}
}

export function loginUser(credentials) {  
  console.log(credentials)
  return function(dispatch) {
    return SessionApi.login(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      console.log(response)
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}