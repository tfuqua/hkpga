import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actions';

function loginReducer(
  state = {
    isAuthenticated: localStorage.getItem('email') ? true : false,
    email: localStorage.getItem('email'),
    isAdmin: localStorage.getItem('isAdmin')
  },
  action
) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        email: action.email,
        isAdmin: action.isAdmin
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}

export default loginReducer;
