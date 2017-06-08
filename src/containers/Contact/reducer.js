import { GET_CONTACT_INFO } from './actions';

function contactReducer(state = {}, action) {
  switch (action.type) {
    case GET_CONTACT_INFO:
      return {
        contactInfo: action.contactInfo
      };
    default:
      return state;
  }
}

export default contactReducer;
