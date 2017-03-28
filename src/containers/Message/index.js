import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hideMessage } from './actions';

class Message extends Component {
  constructor(props, context) {
    super(props, context);

    this.hideMessage = this.hideMessage.bind(this);
  }

  hideMessage() {
    this.props.hideMessage();
  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.message !== 'undefined' && nextProps.message.show) {
      window.scrollTo(0, 0);
    }

    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.hideMessage(); //Hide Message if navigating to new page
    }
  }

  render() {
    let message = this.props.message ? this.props.message : {};
    let cssClass = `alert message alert-${message.type}`;
    return (
      <div>
        {message.show
          ? <div className={cssClass} role="alert">
              <button onClick={this.hideMessage} type="button" className="close" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>

              <div>
                {message.message}
              </div>

              {message.details
                ? <ul>
                    <li>{message.details.message}</li>
                  </ul>
                : null}

            </div>
          : ''}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    message: store.messageReducer.message
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hideMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);
