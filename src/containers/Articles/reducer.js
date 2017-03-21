import {
  GET_ARTICLES,
  GET_LATEST_ARTICLE,
  REQUEST_ARTICLES,
  GET_ARTICLE,
  GET_ARTICLE_QUERY
} from "./actions";

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
        article: action.article
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
    default:
      return state;
  }
}

export default articleReducer;
