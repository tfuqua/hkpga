import { combineReducers } from 'redux';

import aboutReducer from './containers/About/reducer';
import archiveReducer from './containers/Archives/reducer';
import coverageReducer from './containers/Coverage/reducer';
import magazineReducer from './containers/Magazine/reducer';
import messageReducer from './containers/Message/reducer';
import releasesReducer from './containers/Releases/reducer';
import tournamentReducer from './containers/Tournaments/reducer';

const reducer = combineReducers({
    aboutReducer,
    archiveReducer,
    coverageReducer,
    magazineReducer,
    messageReducer,
    releasesReducer,
    tournamentReducer
});

export default reducer;
