import database from '../../database';
import config from '../../../config/env/development';
import axios from 'axios';
import { displayMessage } from '../Message/actions';
import { SAVE_SUCCESSFUL, PRESS_DELETE_SUCCESS } from '../../util/messages';

export const REQUEST_PRESS = 'REQUEST_PRESS';
export const GET_PRESS_ENTRY = 'GET_PRESS_ENTRY';
export const GET_PRESS_QUERY = 'GET_PRESS_QUERY';
export const CHANGE_PRESS_PAGE = 'CHANGE_PRESS_PAGE';
export const GET_FILTERED_PRESS = 'GET_FILTERED_PRESS';

export function requestPress() {
  return {
    type: REQUEST_PRESS
  };
}

export function receivePressEntry(entry) {
  return {
    type: GET_PRESS_ENTRY,
    entry
  };
}
export function receiveFilteredPress(press) {
  return {
    type: GET_FILTERED_PRESS,
    press
  };
}
export function receivePressQuery(query) {
  return {
    type: GET_PRESS_QUERY,
    query
  };
}

export function changePage(page) {
  return {
    type: CHANGE_PRESS_PAGE,
    page
  };
}

export function getPressEntry(key) {
  return dispatch => {
    const ref = database.ref(`press/${key}`);
    return ref
      .once('value', press => {
        dispatch(receivePressEntry(press.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function getPressByType(type) {
  return dispatch => {
    return database
      .ref('press')
      .orderByChild('type')
      .equalTo(type)
      .once('value', press => {
        dispatch(receiveFilteredPress(press.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function savePressEntry(id, entry) {
  return dispatch => {
    dispatch(displayMessage(SAVE_SUCCESSFUL));
    return database.ref(`press/${id}`).set(entry);
  };
}
export function deleteEntry(id) {
  return dispatch => {
    database.ref(`press/${id}`).remove();
    dispatch(displayMessage(PRESS_DELETE_SUCCESS));
    dispatch(queryPress({ page: 1 }));
  };
}

export function queryPress(query) {
  return dispatch => {
    dispatch(requestPress());

    return axios.get(`${config.firebase.creds.databaseURL}/press.json?shallow=true`).then(res => {
      const keys = Object.keys(res.data);
      const numberOfResults = keys.length;
      const totalPages = Math.ceil(numberOfResults / 10);

      database
        .ref('press')
        .once('value', press => {
          dispatch(
            receivePressQuery({
              data: press.val(),
              numberOfResults,
              totalPages,
              current: query.page,
              first: query.page === 1 ? true : false,
              last: query.page === totalPages
            })
          );
        })
        .catch(error => {
          console.log(error);
        });
    });
  };
}

export function createEntry(type) {
  let press = {
    cover: '',
    publish_date: Date.now(),
    type: type,
    url: '',
    title: {
      en: '',
      'zh-cn': '',
      'zh-hk': ''
    }
  };

  return dispatch => {
    let entry = database.ref(`/press`).push();
    entry
      .set(press)
      .then(result => {
        dispatch(displayMessage(SAVE_SUCCESSFUL));
        dispatch(queryPress({ page: 1 }));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
