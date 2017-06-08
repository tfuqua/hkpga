import { combineReducers } from 'redux';

import archiveReducer from './containers/Archives/reducer';
import articleReducer from './containers/Articles/reducer';
import contactReducer from './containers/Contact/reducer';
import feedbackReducer from './containers/Feedback/reducer';
import languageReducer from './containers/Lang/reducer';
import loginReducer from './containers/Login/reducer';
import messageReducer from './containers/Message/reducer';
import meritReducer from './containers/Merit/reducer';
import pageReducer from './containers/Pages/reducer';
import pressReducer from './containers/Press/reducer';
import tournamentReducer from './containers/Tournaments/reducer';
import userReducer from './containers/Users/reducer';

const reducer = combineReducers({
  archiveReducer,
  articleReducer,
  contactReducer,
  feedbackReducer,
  languageReducer,
  loginReducer,
  messageReducer,
  meritReducer,
  pageReducer,
  pressReducer,
  tournamentReducer,
  userReducer
});

export default reducer;
