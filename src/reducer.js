import { combineReducers } from 'redux';

import archiveReducer from './containers/Archives/reducer';
import articleReducer from './containers/Articles/reducer';
import coverageReducer from './containers/Coverage/reducer';
import languageReducer from './containers/Lang/reducer';
import loginReducer from './containers/Login/reducer';
import magazineReducer from './containers/Magazine/reducer';
import messageReducer from './containers/Message/reducer';
import pageReducer from './containers/Pages/reducer';
import releasesReducer from './containers/Releases/reducer';
import tournamentReducer from './containers/Tournaments/reducer';
import userReducer from './containers/Admin/Users/reducer';

const reducer = combineReducers({
    archiveReducer,
    articleReducer,
    coverageReducer,
    languageReducer,
    loginReducer,
    magazineReducer,
    messageReducer,
    pageReducer,
    releasesReducer,
    tournamentReducer,
    userReducer
});

export default reducer;
