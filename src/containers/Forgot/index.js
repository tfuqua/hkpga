import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resetPassword } from './actions';
import TextField from '../../components/TextField';
import translations from '../../util/translations';

class Forgot extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.resetPassword(this.state.email);
  }

  handleFieldChange(field) {
    return e => {
      this.setState({ ...this.state, [field]: e.target.value });
    };
  }

  render() {
    return (
      <div className="container-fluid">

        <div className="login-form">
          <h2>{translations[this.props.lang].RESETPASSWORD}</h2>
          <form onSubmit={this.handleSubmit} className="form">

            <div className="form-group">
              <TextField
                showError={this.state.showErrors}
                text={this.state.email}
                onFieldChanged={this.handleFieldChange('email')}
                placeholder="Email"
              />
            </div>

            <input
              type="submit"
              value={translations[this.props.lang].RESETPASSWORD}
              className="btn btn-success btn-block"
            />
          </form>
        </div>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ resetPassword }, dispatch);
}

function mapStateToProps(store) {
  return {
    isAuthenticated: store.loginReducer.isAuthenticated,
    lang: store.languageReducer.lang
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Forgot);
