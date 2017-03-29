import { GET_USERS, REQUEST_USERS, GET_USER, GET_ALL_USERS, GET_COMMITTEE, GET_HONORARY } from './actions';

function userReducer(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        userQuery: action.userQuery,
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
    default:
      return state;
  }
}

export default userReducer;
