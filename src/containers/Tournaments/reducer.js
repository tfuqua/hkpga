import { GET_TOURNAMENTS, REQUEST_TOURNAMENTS } from './actions';

function tournamentReducer(state = {}, action) {

  switch(action.type) {
    case GET_TOURNAMENTS:
    return {
        ...state,
        tournaments: action.tournaments,
        isFetching: false
    } 
    case REQUEST_TOURNAMENTS:
    return {
        ...state,
        isFetching: true
    }      
    default:
      return state;
  }
}

export default tournamentReducer;