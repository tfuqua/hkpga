import database, { firebaseAuth } from '../../database';
import { displayMessage } from '../Message/actions';
import { REGISTRATION_ERROR, REGISTRATION_SUCCESS } from '../../util/messages';

export function registerUser(creds) {
  return dispatch => {
    return firebaseAuth
      .createUserWithEmailAndPassword(creds.username, creds.password)
      .then(user => {
        database.ref(`users/${user.uid}`).set({
          email: user.email,
          uid: user.uid,
          name: {
            en: creds.name,
            'zh-cn': creds.name,
            'zh-hk': creds.name
          }
        });
        dispatch(displayMessage(REGISTRATION_SUCCESS));
      })
      .catch(error => {
        dispatch(displayMessage(REGISTRATION_ERROR, error));
      });
  };
}
