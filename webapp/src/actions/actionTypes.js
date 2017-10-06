//@flow
type Action = string;
// login
export const LOGIN_SUCCESS: Action = 'LOGIN_SUCCESS';
export const LOGIN_ERROR: Action = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS: Action = 'LOGOUT_SUCCESS';

// gallery
export const FETCH_GALLERIES_SUCCESS: Action = 'FETCH_GALLERIES_SUCCESS';
export const FETCH_GALLERIES_ERROR: Action = 'FETCH_GALLERIES_ERROR';

// save webcam
export const SAVE_WEBCAM: Action = 'SAVE_WEBCAM';
export const SAVE_WEBCAM_SUCCESS: Action = 'SAVE_WEBCAM_SUCCESS';

// delete webcam
export const DELETE_WEBCAM: Action = 'DELETE_WEBCAM';
export const DELETE_WEBCAM_SUCCES: Action = 'DELETE_WEBCAM_SUCCES';
export const DELETE_WEBCAM_ERROR: Action = 'DELETE_WEBCAM_ERROR';

// hide webcam
export const HIDE_WEBCAM: Action = 'HIDE_WEBCAM';
export const HIDE_WEBCAM_SUCCESS: Action = 'HIDE_WEBCAM_SUCCESS';

// fetch webcam from webcam.travel.com
export const FETCH_WEBCAMS: Action = 'FETCH_WEBCAMS';
export const FETCH_WEBCAMS_SUCCESS: Action = 'FETCH_WEBCAMS_SUCCESS';
export const FETCH_WEBCAMS_ERROR: Action = 'FETCH_WEBCAMS_ERROR';

// fwtch savedWebcmas
export const FETCH_SAVED_WEBCAMS_SUCCESS: Action = 'FETCH_SAVED_WEBCAMS_SUCCESS';

// position
export const SET_POSITION: Action = 'SET_POSITION';
export const GET_POSITION: Action = 'GET_POSITION';
