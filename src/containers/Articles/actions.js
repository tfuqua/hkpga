import database from '../../database';

export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_LATEST_ARTICLE = 'GET_LATEST_ARTICLE';

export function receiveArticles(articles) {
  return {
    type: GET_ARTICLES,
    articles
  };
}

export function receiveLatestArticle(article) {
  return {
    type: GET_LATEST_ARTICLE,
    article
  };
}

export function getLatestArticle(){
  return dispatch => {
    const ref = database.ref('articles');
    return ref.orderByChild('publish_date').limitToLast(1).once('value', article => {
      dispatch(receiveLatestArticle(article.val()));
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

export function getArticles(){
  return dispatch => {

    const ref = database.ref('articles');
    return ref.orderByChild('publish_date').once('value', articles => {
      dispatch(receiveArticles(articles.val()));
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
