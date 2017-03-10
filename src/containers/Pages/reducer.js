import { GET_PAGES, REQUEST_PAGES, GET_PAGE } from './actions';

function pageReducer(state = {}, action) {

  switch(action.type) {
    case GET_PAGES:
    return {
      ...state,
      isFetching: false,
      pages: action.pages
    }  
    case GET_PAGE:
    return {
      ...state,
      isFetching: false,
      page: action.page
    }      
    case REQUEST_PAGES:
    return {
      ...state,
      isFetching: true
    }
    default:
      return state;
  }
}

export default pageReducer;