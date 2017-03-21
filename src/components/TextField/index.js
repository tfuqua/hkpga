import React from 'react';

function TextField(props) {
  let value = props.text ? props.text : '';

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder={props.placeholder}
        value={value}
        onChange={props.onFieldChanged}
      />
      {props.showError && props.errorText !== ''
        ? <div className="validation-error">
            <span className="text">{props.errorText}</span>
          </div>
        : ''}
    </div>
  );
}

TextField.propTypes = {
  onFieldChanged: React.PropTypes.func.isRequired
};

export default TextField;
