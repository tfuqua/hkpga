import { GET_RELEASES } from './actions';

function magazineReducer(state = {}, action) {

  switch(action.type) {
    case GET_RELEASES:
    return {
        releases: action.releases
    }  
    default:
      return state;
  }
}

export default magazineReducer;