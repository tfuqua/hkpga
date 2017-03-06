import { GET_LANG, SET_LANG } from './actions';

function languageReducer(state = {
  lang: localStorage.getItem('lang') ?  localStorage.getItem('lang') : 'en' 
}, action) {

  switch(action.type) {
    case GET_LANG:
    return {
        lang: localStorage.getItem('lang') ?  localStorage.getItem('lang') : 'en'
    }  
    case SET_LANG:
    return {
        lang: action.lang
    }      
    default:
      return state;
  }
}

export default languageReducer;