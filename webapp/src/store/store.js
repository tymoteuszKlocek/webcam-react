import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'

const middleware = applyMiddleware(ReduxThunk, logger);

let store = createStore(rootReducer, middleware);

export default store;
