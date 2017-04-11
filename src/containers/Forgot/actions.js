import { firebaseAuth } from '../../database';
import { displayMessage } from '../Message/actions';
import { RESET_ERROR, RESET_SUCCESS } from '../../util/messages';

export function resetPassword(email) {
  return dispatch => {
    return firebaseAuth
      .sendPasswordResetEmail(email)
      .then(user => {
        dispatch(displayMessage(RESET_SUCCESS));
      })
      .catch(error => {
        dispatch(displayMessage(RESET_ERROR, error));
      });
  };
}
