import { combineReducers } from 'redux';

import aboutReducer from './containers/About/reducer';
import archiveReducer from './containers/Archives/reducer';
import articleReducer from './containers/Articles/reducer';
import coverageReducer from './containers/Coverage/reducer';
import languageReducer from './containers/Lang/reducer';
import loginReducer from './containers/Login/reducer';
import magazineReducer from './containers/Magazine/reducer';
import messageReducer from './containers/Message/reducer';
import releasesReducer from './containers/Releases/reducer';
import tournamentReducer from './containers/Tournaments/reducer';

const reducer = combineReducers({
    aboutReducer,
    archiveReducer,
    articleReducer,
    coverageReducer,
    languageReducer,
    loginReducer,
    magazineReducer,
    messageReducer,
    releasesReducer,
    tournamentReducer
});

export default reducer;
