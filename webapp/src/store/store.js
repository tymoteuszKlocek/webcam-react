import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { loadState, saveState } from './localStorage';
import { throttle } from 'lodash';

const persistedState: Object = loadState();

const middleware = applyMiddleware(ReduxThunk, logger);

const store: Object = createStore(rootReducer, persistedState, middleware);

store.subscribe(throttle(() => {
    saveState({
        galleryWebcams: store.getState().galleryWebcams,
        webcams: store.getState().webcams,
        session: store.getState().session,
        galleries: store.getState().galleries,
        position: store.getState().position,
    });
}, 1000))

export default store;
