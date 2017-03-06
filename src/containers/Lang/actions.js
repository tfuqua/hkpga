export const GET_LANG = 'GET_LANG';
export const SET_LANG = 'SET_LANG';

export function getLang() {
  return {
    type: GET_LANG
  };
}

export function setLang(lang) {
    localStorage.setItem('lang', lang)
    return {
        type: SET_LANG,
        lang
    }
}