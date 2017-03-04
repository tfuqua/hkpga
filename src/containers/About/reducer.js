import { GET_PAGES } from './actions';

function pageReducer(state = {}, action) {

  switch(action.type) {
    case GET_PAGES:
    return {
        pages: action.pages
    }  
    default:
      return state;
  }
}

export default pageReducer;