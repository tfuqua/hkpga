import database from '../../database';
import { displayMessage } from '../Message/actions';
import { SAVE_SUCCESSFUL } from '../../util/messages';

export const GET_MERIT = 'GET_MERIT';
export const REQUEST_MERIT = 'REQUEST_MERIT';
export const SAVE_MERIT = 'SAVE_MERIT';

export function receiveMerit(merit) {
  return {
    type: GET_MERIT,
    merit
  };
}

export function requestMerit() {
  return {
    type: REQUEST_MERIT
  };
}

export function getMerit(year) {
  return dispatch => {
    dispatch(requestMerit());

    return database
      .ref(`merit/${year}`)
      .once('value', merit => {
        dispatch(receiveMerit(merit.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function saveMerit(merit) {
  console.log(merit);
  return dispatch => {
    dispatch(displayMessage(SAVE_SUCCESSFUL));
    return database.ref(`merit/2017`).set(merit);
  };
}
