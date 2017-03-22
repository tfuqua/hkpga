import React from 'react';

function RightArrow(props) {
  return (
    <button className="slick-arrow slick-next" onClick={props.onClick}>
      <i className="fa fa-angle-right" />
    </button>
  );
}

export default RightArrow;
