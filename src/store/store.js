import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'

const midd = (store) => (next) => (action) => {
    console.log('store:', store.getState());
    next(action);
};

const middleware = applyMiddleware(midd, ReduxThunk, logger);

export default createStore(rootReducer, middleware);
