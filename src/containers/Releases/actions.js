import database from '../../database';

export const GET_RELEASES = 'GET_RELEASES';

export function receiveReleases(releases) {
  return {
    type: GET_RELEASES,
    releases
  };
}

export function getReleases(){
  return dispatch => {
   return database.ref('releases').once('value', releases => {
       dispatch(receiveReleases(releases.val()));
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
