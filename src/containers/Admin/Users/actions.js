import database from '../../../database';

export const GET_USERS = 'GET_USERS';

export function receiveUsers(users) {
  return {
    type: GET_USERS,
    users
  };
}

export function getUsers(){
  return dispatch => {
   return database.ref('users').once('value', users => {
       dispatch(receiveUsers(users.val()));
    })
    .catch((error) => { console.log(error);});
  }
}
