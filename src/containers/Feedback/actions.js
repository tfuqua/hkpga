import database from '../../database';
import { displayMessage } from '../Message/actions';
import { SAVE_SUCCESSFUL } from '../../util/messages';

export const GET_FEEDBACK = 'GET_FEEDBACK';
export const REQUEST_FEEDBACK = 'REQUEST_FEEDBACK';

export function receiveFeedback(feedback) {
  return {
    type: GET_FEEDBACK,
    feedback
  };
}

export function requestFeedback() {
  return {
    type: REQUEST_FEEDBACK
  };
}

export function getFeedback() {
  return dispatch => {
    dispatch(requestFeedback());

    return database
      .ref('feedback')
      .once('value', feedback => {
        dispatch(receiveFeedback(feedback.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function deleteFeedback(message) {
  return dispatch => {
    return database.ref(`feedback/${message.id}`).remove().then(() => {
      dispatch(getFeedback());
    });
  };
}

export function sendMessage(message, email) {
  let feedback = {
    message,
    email,
    date: Date.now()
  };

  return dispatch => {
    return database.ref(`feedback`).push(feedback).then(() => {
      dispatch(displayMessage(SAVE_SUCCESSFUL));
    });
  };
}
