import { GET_ARCHIVES } from './actions';

function archiveReducer(state = {}, action) {

  switch(action.type) {
    case GET_ARCHIVES:
    return {
        archives: action.archives
    }  
    default:
      return state;
  }
}

export default archiveReducer;