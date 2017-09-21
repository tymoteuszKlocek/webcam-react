import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk'; 

const fetcher = (store) => (next) => (action) => {
    console.log('middleware works', store.getState());
    next(action);
};

const middleware = applyMiddleware(fetcher, ReduxThunk);

export default createStore(reducers, middleware);
