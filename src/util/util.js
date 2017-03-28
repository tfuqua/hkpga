import { sortBy } from 'lodash';

export function mapObjectToArray(obj) {
  let arr = [];

  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      arr.push({ ...obj[k], id: k });
    }
  }

  return arr;
}

export function mapStringToProps(str) {
  let obj = {};

  str.split('.').reduce((prev, curr) => {
    if (prev) {
      obj[prev] = { [curr]: {} };
    }
  });

  return obj;
}

export function sortResults(results) {
  results = mapObjectToArray(results);

  return sortBy(results, ['rank', 'totalScore']);
}

export function generatePreview(html, length) {
  let formattedHTML = {};

  if (typeof html === 'object') {
    Object.keys(html).forEach(function(key, i) {
      formattedHTML[key] = strip(html[key].replace(/<img[^>]*>/g, ''));
      formattedHTML[key] = formattedHTML[key].substring(0, length);
      formattedHTML[key] = formattedHTML[key].substr(
        0,
        Math.min(formattedHTML[key].length, formattedHTML[key].lastIndexOf(' '))
      ) + '...';
    });
  } else {
    formattedHTML = strip(html.replace(/<img[^>]*>/g, ''));
  }

  return formattedHTML;
}

function strip(html) {
  var tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}
