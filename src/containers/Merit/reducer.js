import { GET_MERIT, REQUEST_MERIT, GET_MERIT_BY_YEAR } from './actions';

function meritReducer(state = {}, action) {
  switch (action.type) {
    case GET_MERIT:
      return {
        ...state,
        isFetching: false,
        merit: action.merit
      };
    case GET_MERIT_BY_YEAR:
      return {
        ...state,
        isFetching: false,
        meritByYear: action.merit
      };
    case REQUEST_MERIT:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
}

export default meritReducer;
