import React from 'react';

function LeftArrow(props) {
  return (
    <button className="slick-arrow slick-prev" onClick={props.onClick}>
      <i className="fa fa-angle-left" />
    </button>
  );
}

export default LeftArrow;
