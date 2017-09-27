import { combineReducers } from 'redux';

import webcams from './webcamsReducer';
import session from './sessionReducer';
import galleries from './galleriesReducer';
import position from './positionReducer';

const rootReducer = combineReducers({
    webcams,
    session,
    galleries,
    position
})

export default rootReducer;  