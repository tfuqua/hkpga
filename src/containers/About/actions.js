import database from '../../database';

export const GET_PAGES = 'GET_PAGES';

export function receivePages(pages) {
  return {
    type: GET_PAGES,
    pages
  };
}

export function getPages(){
  return dispatch => {
   return database.ref('pages').once('value', pages => {
       dispatch(receivePages(pages.val()));
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
