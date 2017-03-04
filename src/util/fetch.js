import fetch from 'isomorphic-fetch';
import cookie from 'react-cookie';

/**
 * Requests a URL, returning a promise
 */
export default function request(url, options) {
  if (typeof options === 'undefined'){
      options = {headers: {}};
  }

  if (cookie.load('jwt') !== undefined) {
    options.headers =   Object.assign({}, options.headers, {'X-AUTH-TOKEN': cookie.load('jwt')}); //Append JWT header to existing headers
  }

  return fetch(url, options);
}
