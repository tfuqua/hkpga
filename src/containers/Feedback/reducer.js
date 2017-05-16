import { GET_FEEDBACK, REQUEST_FEEDBACK } from './actions';

function feedbackReducer(state = {}, action) {
  switch (action.type) {
    case GET_FEEDBACK:
      return {
        ...state,
        isFetching: false,
        feedback: action.feedback
      };
    case REQUEST_FEEDBACK:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
}

export default feedbackReducer;
