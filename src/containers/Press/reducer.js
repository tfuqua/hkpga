import { mapObjectToArray } from '../../util/util';
import { sortBy } from 'lodash';
import { REQUEST_PRESS, GET_PRESS_QUERY, CHANGE_PRESS_PAGE, GET_PRESS_ENTRY, GET_FILTERED_PRESS } from './actions';

function pressReducer(state = {}, action) {
  switch (action.type) {
    case REQUEST_PRESS:
      return {
        ...state,
        isFetching: true
      };
    case GET_PRESS_ENTRY:
      return {
        ...state,
        entry: action.entry
      };
    case GET_FILTERED_PRESS:
      return {
        ...state,
        isFetching: false,
        press: action.press
      };
    case GET_PRESS_QUERY:
      let sortedResults = filterResults(action.query);
      return {
        ...state,
        isFetching: false,
        query: action.query,
        sortedResults,
        results: sortedResults.slice((action.query.current - 1) * 10, action.query.current * 10)
      };
    case CHANGE_PRESS_PAGE:
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
  if (!query.sort) query.sort = 'publish_date';

  let data = mapObjectToArray(query.data);
  let sortedResults = sortBy(data, query.sort).reverse();

  return sortedResults;
}
export default pressReducer;
