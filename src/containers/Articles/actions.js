import database from '../../database';
import config from '../../../config/env/development';
import axios from 'axios';

export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_MORE_NEWS = 'GET_MORE_NEWS';
export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const GET_ARTICLE = 'GET_ARTICLE';
export const GET_ARTICLE_QUERY = 'GET_ARTICLE_QUERY';
export const GET_LATEST_ARTICLE = 'GET_LATEST_ARTICLE';

export function receiveArticles(articles) {
  return {
    type: GET_ARTICLES,
    articles
  };
}

export function receiveArticle(article) {
  return {
    type: GET_ARTICLE,
    article
  };
}

export function receiveArticleQuery(query) {
  return {
    type: GET_ARTICLE_QUERY,
    query
  };
}

export function receiveLatestArticle(article) {
  return {
    type: GET_LATEST_ARTICLE,
    article
  };
}

export function receiveMoreNews(moreNews) {
  return {
    type: GET_MORE_NEWS,
    moreNews
  };
}

export function requestArticles() {
  return {
    type: REQUEST_ARTICLES
  };
}

export function getLatestArticle() {
  return dispatch => {
    const ref = database.ref('articles');
    return ref
      .orderByChild('publish_date')
      .limitToLast(1)
      .once('value', article => {
        dispatch(receiveLatestArticle(article.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function getMoreNews() {
  return dispatch => {
    const ref = database.ref('articles');
    return ref
      .orderByChild('publish_date')
      .limitToLast(11)
      .once('value', articles => {
        dispatch(receiveMoreNews(articles.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function getArticle(key) {
  return dispatch => {
    const ref = database.ref(`articles/${key}`);
    return ref
      .once('value', article => {
        dispatch(receiveArticle(article.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function getArticleBySlug(slug) {
  return dispatch => {
    return database
      .ref(`articles`)
      .orderByChild('slug')
      .equalTo(slug)
      .once('value', article => {
        dispatch(receiveArticle(article.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function saveArticle(id, article) {
  return dispatch => {
    return database.ref(`articles/${id}`).set(article);
  };
}

export function getArticles() {
  return dispatch => {
    dispatch(requestArticles());

    const ref = database.ref('articles');
    return ref
      .orderByChild('publish_date')
      .once('value', articles => {
        dispatch(receiveArticles(articles.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function queryArticles(query) {
  return dispatch => {
    dispatch(requestArticles());

    return axios.get(`${config.firebase.creds.databaseURL}/articles.json?shallow=true`).then(res => {
      const keys = Object.keys(res.data).sort();
      const numberOfResults = keys.length;
      const totalPages = Math.ceil(numberOfResults / 10);

      database
        .ref('articles')
        .orderByKey()
        .startAt(keys[10 * (query.page - 1)])
        .limitToFirst(10)
        .once('value', users => {
          dispatch(
            receiveArticleQuery({
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
