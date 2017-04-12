import { mapObjectToArray } from '../../util/util';
import { sortBy } from 'lodash';
import {
  GET_ARTICLES,
  GET_LATEST_ARTICLE,
  REQUEST_ARTICLES,
  GET_ARTICLE,
  GET_ARTICLE_QUERY,
  GET_MORE_NEWS,
  CHANGE_ARTICLE_PAGE
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
      let sortedResults = filterResults(action.query);
      return {
        ...state,
        isFetching: false,
        query: action.query,
        sortedResults,
        results: sortedResults.slice((action.query.current - 1) * 10, action.query.current * 10)
      };
    case GET_MORE_NEWS:
      let news = sortBy(mapObjectToArray(action.moreNews), ['publish_date']).reverse();
      return {
        ...state,
        moreNews: news.slice(1, 11)
      };
    case CHANGE_ARTICLE_PAGE:
      return {
        ...state,
        results: state.sortedResults.slice((action.page - 1) * 10, action.page * 10),
        query: {
          ...state.query,
          current: action.page,
          first: action.page === 1,
          last: action.page === state.query.totalPages
        }
      };
    default:
      return state;
  }
}

function filterResults(query) {
  if (typeof query === 'undefined') return null;
  if (!query.sort) query.sort = 'publish_date';

  let data = mapObjectToArray(query.data);
  let sortedResults = sortBy(data, query.sort).reverse();

  return sortedResults;
}

export default articleReducer;
