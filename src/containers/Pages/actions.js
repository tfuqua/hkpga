import database from '../../database';
import { displayMessage } from '../Message/actions';
import { SAVE_SUCCESSFUL } from '../../util/messages';

export const GET_PAGES = 'GET_PAGES';
export const GET_PAGE = 'GET_PAGE';
export const REQUEST_PAGES = 'REQUEST_PAGES';

export function receivePages(pages) {
  return {
    type: GET_PAGES,
    pages
  };
}

export function receivePage(page) {
  return {
    type: GET_PAGE,
    page
  };
}

export function requestPages() {
  return {
    type: REQUEST_PAGES
  };
}

export function getPages() {
  return dispatch => {
    dispatch(requestPages());

    return database
      .ref('pages')
      .once('value', pages => {
        dispatch(receivePages(pages.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function getPage(key) {
  return dispatch => {
    dispatch(requestPages());

    return database
      .ref(`pages/${key}`)
      .once('value', page => {
        dispatch(receivePage(page.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function savePage(key, page) {
  return dispatch => {
    dispatch(displayMessage(SAVE_SUCCESSFUL));
    return database.ref(`pages/${key}`).set(page);
  };
}

export function deletePage(key) {
  return dispatch => {
    return database
      .ref(`pages/${key}`)
      .remove()
      .then(() => {
        console.log('Page Deleted');
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function getPageBySlug(slug) {
  return dispatch => {
    dispatch(requestPages());

    return database
      .ref(`pages`)
      .orderByChild('slug')
      .equalTo(slug)
      .once('value', page => {
        dispatch(receivePage(page.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
