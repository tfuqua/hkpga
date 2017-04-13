import React from 'react';
import { mapObjectToArray } from '../../util/util';

function Listing(props) {
  if (props.search.length < 1) {
    return false;
  } else {
    let items = buildList(props.search, props.items);
    return (
      <div className="autocomplete">
        {items.map((item, i) => (
          <div key={i}>
            <a onClick={props.playerChange.bind(this, item)}>{item.name.en}</a>
          </div>
        ))}
      </div>
    );
  }
}
export default Listing;

function buildList(search, items) {
  let arr = mapObjectToArray(items);
  let filteredResults = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.en.toUpperCase().includes(search.toUpperCase())) {
      filteredResults.push(arr[i]);
    }
    if (filteredResults.length > 9) break;
  }
  return filteredResults;
}
