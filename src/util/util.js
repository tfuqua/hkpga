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

const sortWeight = {
  played: 1,
  signedup: 2,
  registered: 2,
  retired: 3,
  missedcut: 4,
  withdrawn: 5,
  disqualified: 6,
  weathercancel: 6
};

export function sortResults(results) {
  results = mapObjectToArray(results);

  let sort1 = sortBy(results, result => {
    return sortWeight[result.status];
  });
  let sort2 = sortBy(sort1, ['rank', 'totalScore']);
  return sort2;
}
