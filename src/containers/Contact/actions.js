import database from '../../database';
import { displayMessage } from '../Message/actions';
import { SAVE_SUCCESSFUL } from '../../util/messages';

export const GET_CONTACT_INFO = 'GET_CONTACT_INFO';

export function receiveContactInfo(contactInfo) {
  return {
    type: GET_CONTACT_INFO,
    contactInfo
  };
}

export function saveContactInfo(contactInfo) {
  return dispatch => {
    return database.ref(`contact/`).set(contactInfo).then(response => {
      dispatch(displayMessage(SAVE_SUCCESSFUL));
    });
  };
}

export function getContactInfo() {
  return dispatch => {
    return database
      .ref('contact')
      .once('value', contact => {
        dispatch(receiveContactInfo(contact.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
