import { GET_TOURNAMENTS} from './actions';

function tournamentReducer(state = {}, action) {

  switch(action.type) {
    case GET_TOURNAMENTS:
    return {
        tournaments: action.tournaments
    }  
    default:
      return state;
  }
}

export default tournamentReducer;