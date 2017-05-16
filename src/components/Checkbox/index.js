import React from 'react';

function Checkbox(props) {
  return (
    <div>
      <label>
        {props.label ? <div>{props.label}</div> : null}
        <input name={props.name} type="checkbox" checked={props.checked} onChange={props.handleCheckChange} />
      </label>

    </div>
  );
}

export default Checkbox;
