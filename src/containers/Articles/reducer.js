import {
  GET_ARTICLES,
  GET_LATEST_ARTICLE,
  REQUEST_ARTICLES,
  GET_ARTICLE,
  GET_ARTICLE_QUERY,
  GET_MORE_NEWS
} from './actions';

function articleReducer(state = {}, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.articles,
        isFetching: false
      };
    case REQUEST_ARTICLES:
      return {
        ...state,
        isFetching: true
      };
    case GET_LATEST_ARTICLE:
      return {
        latestArticle: action.article
      };
    case GET_ARTICLE:
      return {
        ...state,
        isFetching: false,
        article: action.article
      };
    case GET_ARTICLE_QUERY:
      return {
        ...state,
        isFetching: false,
        query: action.query
      };
    case GET_MORE_NEWS:
      return {
        ...state,
        moreNews: action.moreNews
      };
    default:
      return state;
  }
}

export default articleReducer;
