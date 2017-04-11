import { mapObjectToArray } from '../../util/util';
import { sortBy } from 'lodash';
import {
  GET_TOURNAMENTS,
  REQUEST_TOURNAMENTS,
  REQUEST_RESULTS,
  GET_TOURNAMENT,
  GET_TOURNAMENT_QUERY,
  GET_RESULTS,
  CHANGE_TOURNAMENT_PAGE
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
      let sortedResults = filterResults(action.query);
      return {
        ...state,
        isFetching: false,
        query: action.query,
        sortedResults,
        results: sortedResults.slice((action.query.current - 1) * 10, action.query.current * 10)
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
    case CHANGE_TOURNAMENT_PAGE:
      return {
        ...state,
        results: state.sortedResults.slice((action.page - 1) * 10, action.page * 10),
        query: {
          ...state.query,
          current: action.page,
          first: action.page === 1,
          last: action.page === state.query.totalPages
        }
      };
    default:
      return state;
  }
}

function filterResults(query) {
  if (typeof query === 'undefined') return null;
  if (!query.sort) query.sort = 'start_date';

  let data = mapObjectToArray(query.data);
  let sortedResults = sortBy(data, query.sort).reverse();

  return sortedResults;
}

export default tournamentReducer;
