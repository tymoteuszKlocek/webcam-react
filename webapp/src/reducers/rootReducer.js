import { combineReducers } from 'redux';

import webcams from './webcamsReducer';
import session from './sessionReducer';
import galleries from './galleriesReducer';
import position from './positionReducer';
import savedWebcams from './savedWebcamsReducer';

const rootReducer = combineReducers({
    webcams,
    session,
    galleries,
    position,
    savedWebcams
})

export default rootReducer;  