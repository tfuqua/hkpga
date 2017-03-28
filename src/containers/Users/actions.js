import database from '../../database';
import config from '../../../config/env/development';
import { displayMessage } from '../Message/actions';
import { SAVE_SUCCESSFUL, SAVE_ERROR } from '../../util/messages';
import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USER = 'GET_USER';
export const REQUEST_USERS = 'REQUEST_USERS';

export function receiveUsers(userQuery) {
  return {
    type: GET_USERS,
    userQuery
  };
}

export function receiveAllUsers(users) {
  return {
    type: GET_ALL_USERS,
    users
  };
}

export function receiveUser(user) {
  return {
    type: GET_USER,
    user
  };
}

export function RequestUsers() {
  return {
    type: REQUEST_USERS
  };
}

export function saveUser(id, user) {
  return dispatch => {
    dispatch(displayMessage(SAVE_SUCCESSFUL));
    return database.ref(`users/${id}`).set(user);
  };
}

/******* Get User by Key *********/
export function getUser(key) {
  return dispatch => {
    dispatch(RequestUsers());

    return database
      .ref(`users/${key}`)
      .once('value', user => {
        dispatch(receiveUser(user.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

/******* Get All Users *********/
export function getAllUsers() {
  return dispatch => {
    dispatch(RequestUsers());

    return database
      .ref(`users`)
      .once('value', users => {
        dispatch(receiveAllUsers(users.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function getUsers(query) {
  return dispatch => {
    dispatch(RequestUsers());

    return axios.get(`${config.firebase.creds.databaseURL}/users.json?shallow=true`).then(res => {
      const keys = Object.keys(res.data).sort();
      const numberOfResults = keys.length;
      const totalPages = Math.ceil(numberOfResults / 10);

      database
        .ref('users')
        .orderByKey()
        .startAt(keys[10 * (query.page - 1)])
        .limitToFirst(10)
        .once('value', users => {
          dispatch(
            receiveUsers({
              data: users.val(),
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
