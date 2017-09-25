import { combineReducers } from 'redux';

import webcams from './webcamsReducer';
import session from './sessionReducer';
import galleries from './galleriesReducer';

const rootReducer = combineReducers({
    webcams,
    session,
    galleries
})

export default rootReducer;  