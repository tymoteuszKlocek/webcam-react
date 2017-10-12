//@flow
import { combineReducers } from 'redux';

import webcams from './webcamsReducer';
import session from './sessionReducer';
import galleries from './galleriesReducer';
import position from './positionReducer';
import galleryWebcams from './galleryWebcamsReducer';
//import routes from './routesReducer';

const rootReducer = combineReducers({
    webcams,
    session,
    galleries,
    position,
    galleryWebcams,
    // TODO: ask if routes is good idea
    // routes,
});

export default rootReducer;  