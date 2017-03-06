import { firebaseAuth } from '../../database';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

function receiveLogin(user) {
    return { type: LOGIN_SUCCESS, user };
}

function receiveLogout() {
    return { type: LOGOUT_SUCCESS };
}

export function loginUser(creds) {
  return (dispatch) => {
    return firebaseAuth.signInWithEmailAndPassword(creds.username, creds.password)
    .then((user) => {
      localStorage.setItem('user', user.email);
      dispatch(receiveLogin(user));
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

// Logs the user out
export function logoutUser() {
  return (dispatch) => {
    return firebaseAuth.signOut()
    .then((user) => {
      localStorage.removeItem('user');
      dispatch(receiveLogout());
    })
      .catch((error) => {
        console.log(error);
      })
  }
}