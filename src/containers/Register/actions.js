import database, { firebaseAuth } from '../../database';
import { displayMessage } from '../Message/actions';
import { createUsername } from '../../util/util';
import { REGISTRATION_ERROR, REGISTRATION_SUCCESS } from '../../util/messages';

export function registerUser(creds) {
  return dispatch => {
    return firebaseAuth
      .createUserWithEmailAndPassword(creds.username, creds.password)
      .then(user => {
        database.ref(`users/${createUsername(user.email)}`).set({
          email: user.email,
          uid: user.uid,
          username: createUsername(user.email),
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
