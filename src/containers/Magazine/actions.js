import database from '../../database';

export const GET_MAGAZINES = 'GET_MAGAZINES';

export function receiveMagazines(magazines) {
  return {
    type: GET_MAGAZINES,
    magazines
  };
}

export function getMagazines(){
  return dispatch => {
   return database.ref('magazines').once('value', magazines => {
       dispatch(receiveMagazines(magazines.val()));
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
