import database from '../../database';
import { displayMessage } from '../Message/actions';
import { SAVE_SUCCESSFUL } from '../../util/messages';

export const GET_MERIT = 'GET_MERIT';
export const SAVE_MERIT = 'SAVE_MERIT';
export const REQUEST_MERIT = 'REQUEST_MERIT';
export const GET_MERIT_BY_YEAR = 'GET_MERIT_BY_YEAR';

export function receiveMerit(merit) {
  return {
    type: GET_MERIT,
    merit
  };
}

export function receiveMeritByYear(merit) {
  return {
    type: GET_MERIT_BY_YEAR,
    merit
  };
}

export function requestMerit() {
  return {
    type: REQUEST_MERIT
  };
}

export function getMeritByYear(year) {
  return dispatch => {
    dispatch(requestMerit());

    return database
      .ref(`merit/${year}`)
      .once('value', merit => {
        dispatch(receiveMeritByYear(merit.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function getMerit() {
  return dispatch => {
    dispatch(requestMerit());
    return database
      .ref(`merit/`)
      .orderByKey()
      .once('value', merit => {
        dispatch(receiveMerit(merit.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function saveMerit(year, merit, division) {
  return dispatch => {
    dispatch(displayMessage(SAVE_SUCCESSFUL));
    return database.ref(`merit/${year}/${division}`).set(merit);
  };
}
