import React from 'react';

function Select(props) {
  let options = typeof props.options !== 'undefined' ? props.options : [];
  let value = props.value !== null && typeof props.value !== 'undefined' ? props.value : {};
  let fieldName = typeof props.fieldName !== 'undefined' ? props.fieldName : 'name';

  if (typeof value.id !== 'undefined') {
    value = value.id;
  }

  return options.length > 1 ? (
    <div className="select">
      <select className={`form-control ${props.class}`} value={value} onChange={props.handleChange}>
        <option value={null} />
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option[fieldName]}
          </option>
        ))}
      </select>
    </div>
  ) : (
    <div />
  );
}

export default Select;
