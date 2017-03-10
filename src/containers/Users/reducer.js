import { GET_USERS } from './actions';

function userReducer(state = {}, action) {

  switch(action.type) {
    case GET_USERS:
    return {
        users: action.users
    }  
    default:
      return state;
  }
}

export default userReducer;