import database from '../../database';

export const GET_ARCHIVES = 'GET_ARCHIVES';

export function receiveArchives(archives) {
  return {
    type: GET_ARCHIVES,
    archives
  };
}

export function getArchives(){
  return dispatch => {
   return database.ref('archives').once('value', archive => {
       dispatch(receiveArchives(archive.val()));
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
