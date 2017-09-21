import {combineReducers} from 'redux';

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

const webcamsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_WEBCAMS': {
            state = state.concat(action.payload);
            console.log('save webcams', state)
            break;
        }
        case 'DELETE_WEBCAM': {
            state = state.filter((obj) => obj !== action.payload);
            console.log(state);
            break;
        }
        case 'FETCH_WEBCAMS': {
            console.log('fetch webcams in reducer')
            state = { ...state, webcams: action.payload };
            break;
        }
        default: {
            return state;
        }
    }
    return state;
};

const reducers = combineReducers({
    user: userReducer,
    webcams: webcamsReducer
});

export default reducers;