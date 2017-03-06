import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actions'

function loginReducer(state = {isAuthenticated: localStorage.getItem('user') ? true : false }, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        user: action.user
      }
    case LOGOUT_SUCCESS:
      return {
        isAuthenticated: false,
      }
    default:
      return state
  }
}

export default loginReducer;
