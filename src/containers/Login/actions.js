import { firebaseAuth } from '../../database';
import database from '../../database';
import { createUsername } from '../../util/util';
import { displayMessage } from '../Message/actions';
import { receiveUser } from '../Users/actions';
import { LOGIN_ERROR } from '../../util/messages';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

function createUser(email) {
  database.ref(`users/${createUsername(email)}`).set({
    email: email,
    username: createUsername(email),
    name: {
      en: '',
      'zh-cn': '',
      'zh-hk': ''
    }
  });
}

function receiveLogin(email, isAdmin) {
  return {
    type: LOGIN_SUCCESS,
    email,
    isAdmin
  };
}

function receiveLogout() {
  return { type: LOGOUT_SUCCESS };
}

export function loginUser(creds) {
  return dispatch => {
    return firebaseAuth
      .signInWithEmailAndPassword(creds.username, creds.password)
      .then(user => {
        let email = user.email;
        localStorage.setItem('email', user.email);
        const ref = database.ref('users');
        let isAdmin = false;

        ref.orderByChild('email').equalTo(user.email).once('value', user => {
          if (user.val()) {
            let obj = user.val();
            let u = obj[Object.keys(obj)[0]];
            dispatch(receiveUser(u));

            if (u.isAdmin) {
              localStorage.setItem('isAdmin', true);
              isAdmin = true;
            }
          } else {
            createUser(email);
          }
          dispatch(receiveLogin(email, isAdmin));
        });
      })
      .catch(error => {
        dispatch(displayMessage(LOGIN_ERROR, error));
      });
  };
}

// Logs the user out
export function logoutUser() {
  return dispatch => {
    return firebaseAuth
      .signOut()
      .then(user => {
        localStorage.removeItem('email');
        localStorage.removeItem('isAdmin');
        dispatch(receiveLogout());
      })
      .catch(error => {
        console.log(error);
      });
  };
}
