import { GET_ARTICLES, GET_LATEST_ARTICLE } from './actions';

function articleReducer(state = {}, action) {

  switch(action.type) {
    case GET_ARTICLES:
    return {
        articles: action.articles
    }  
    case GET_LATEST_ARTICLE:
    return {
        article: action.article
    }      
    default:
      return state;
  }
}

export default articleReducer;