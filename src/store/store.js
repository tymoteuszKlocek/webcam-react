import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'

const midd = (store) => (next) => (action) => {
    console.log('middleware test works', store.getState());
    next(action);
};

const middleware = applyMiddleware(midd, ReduxThunk, logger);

export default createStore(reducers, middleware);
