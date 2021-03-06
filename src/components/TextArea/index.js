import React from 'react';

function TextArea(props) {
  let value = props.text ? props.text : '';

  return (
    <div>
      <textarea
        type="text"
        style={props.style}
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

TextArea.propTypes = {
  onFieldChanged: React.PropTypes.func.isRequired
};

export default TextArea;
