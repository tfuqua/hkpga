import { GET_MAGAZINES } from './actions';

function magazineReducer(state = {}, action) {

  switch(action.type) {
    case GET_MAGAZINES:
    return {
        magazines: action.magazines
    }  
    default:
      return state;
  }
}

export default magazineReducer;