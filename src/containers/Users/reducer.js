import { mapObjectToArray } from '../../util/util';
import { sortBy } from 'lodash';
import {
  GET_USERS,
  REQUEST_USERS,
  GET_USER,
  GET_ALL_USERS,
  GET_COMMITTEE,
  GET_HONORARY,
  CHANGE_USER_PAGE,
  SEARCH_USERS
} from './actions';

function userReducer(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      let sortedResults = filterResults(action.userQuery);
      return {
        ...state,
        userQuery: action.userQuery,
        sortedResults,
        results: sortedResults.slice((action.userQuery.current - 1) * 10, action.userQuery.current * 10),
        isFetching: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.user,
        isFetching: false
      };
    case REQUEST_USERS:
      return {
        ...state,
        isFetching: true
      };
    case GET_ALL_USERS:
      return {
        ...state,
        isFetching: false,
        users: action.users
      };
    case GET_COMMITTEE:
      return {
        ...state,
        isFetching: false,
        committee: action.committee
      };
    case GET_HONORARY:
      return {
        ...state,
        isFetching: false,
        honorary: action.honorary
      };
    case CHANGE_USER_PAGE:
      return {
        ...state,
        results: state.sortedResults.slice((action.page - 1) * 10, action.page * 10),
        userQuery: {
          ...state.userQuery,
          current: action.page,
          first: action.page === 1,
          last: action.page === state.userQuery.totalPages
        }
      };
    case SEARCH_USERS:
      return {
        ...state,
        ...searchResults(action.search, state.sortedResults, state.userQuery)
      };
    default:
      return state;
  }
}

function searchResults(search, sortedResults, query) {
  let data = mapObjectToArray(query.data);

  data = data.filter(user => {
    return (
      user.name.en.toUpperCase().includes(search.toUpperCase()) ||
      (user.email && user.email.toUpperCase().includes(search.toUpperCase()))
    );
  });

  let numberOfResults = data.length;
  let totalPages = Math.ceil(numberOfResults / 10);

  return {
    sortedResults: data,
    results: data.slice((1 - 1) * 10, 1 * 10),
    userQuery: {
      data: query.data,
      numberOfResults,
      totalPages,
      current: 1,
      first: true,
      last: query.page === totalPages
    }
  };
}

function filterResults(query) {
  if (typeof query === 'undefined') return null;
  if (!query.sort) query.sort = 'name';

  let data = mapObjectToArray(query.data);

  let sortedResults = sortBy(data, [
    user => {
      return user.name.en;
    }
  ]);

  return sortedResults;
}

export default userReducer;
