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
