// @flow
import { combineReducers } from 'redux';

type WebcamsState = Array<{
    webcamID: string,
    city: string,
    country: string,
    countryCode: string,
    views: string,
    lat: string,
    lng: string,
    position: string,
    thumbnail: string,
    type: string,
    title: string,
    link: string
}>

type Action = {
    type: string,
};

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_NEW': {
            state = Object.assign(state, action.payload);
            break;
        }
        case 'DELETE': {
            //delete;
            break;
        }
        case 'CHANGE_NAME': {
            state = { ...state, name: action.payload };
            break;
        }
        default: {
            return state;
        }
    }
    return state;
};

const webcamsReducer = (state: WebcamsState = [], action: Action) => {
    switch (action.type) {
        case 'SAVE_WEBCAM': {
            state = { ...state, webcams: action.payload };
            console.log('save webcams', state)
            break;
        }
        // TODO: I don't want to store every response, just last one to display it
        case 'DISPLAY_WEBCAMS': {
            state = action.payload ;
            break;
        }
        case 'DELETE_WEBCAM': {
            state = state.filter((webcam) => webcam.webcamID !== action.payload);
            break;
        }
        case 'FETCH_WEBCAMS': {
            console.log('fetch webcams in reducer')
            //TODO put this in SAVE_WEBCAMS and test
            state = { ...state, webcams: action.payload };
            break;
        }
        default: {
            return state;
        }
    }
    return state;
};

const positionReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_POSITION': {
            state = { ...state, position: action.payload };
            console.log('state pos', state)
            break;
        }
        case 'GET_POSITION': {
            console.log('state get pos', state)
            return state;
        }
        default: {
            return state;
        }
    }
    return state;
}

const galleryReducer = (state = {}, action) => {
    switch (action.type) {
        case 'DISPLAY_GALLERIES': {
            state = { ...state, gallery: action.payload };
            console.log('state gallery', state)
            break;
        }
        case 'GET_POSITION': {
            console.log('state get pos', state)
            return state;
        }
        default: {
            return state;
        }
    }
    return state;
}

const reducers = combineReducers({
    user: userReducer,
    webcams: webcamsReducer,
    position: positionReducer,
    gallery: galleryReducer
});

export default reducers;