import { GET_MERIT, REQUEST_MERIT } from './actions';

function meritReducer(state = {}, action) {
  switch (action.type) {
    case GET_MERIT:
      return {
        ...state,
        isFetching: false,
        merit: action.merit
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
