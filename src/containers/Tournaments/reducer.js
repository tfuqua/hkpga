import {
  GET_TOURNAMENTS,
  REQUEST_TOURNAMENTS,
  REQUEST_RESULTS,
  GET_TOURNAMENT,
  GET_TOURNAMENT_QUERY,
  GET_RESULTS
} from './actions';

function tournamentReducer(state = {}, action) {
  switch (action.type) {
    case GET_TOURNAMENTS:
      return {
        ...state,
        tournaments: action.tournaments,
        isFetching: false
      };
    case GET_TOURNAMENT:
      return {
        ...state,
        tournament: action.tournament,
        isFetching: false
      };
    case REQUEST_TOURNAMENTS:
      return {
        ...state,
        isFetching: true
      };
    case GET_TOURNAMENT_QUERY:
      return {
        ...state,
        isFetching: false,
        query: action.query
      };
    case REQUEST_RESULTS:
      return {
        ...state,
        isFetching: true
      };
    case GET_RESULTS:
      return {
        ...state,
        isFetching: false,
        results: action.results
      };
    default:
      return state;
  }
}

export default tournamentReducer;
