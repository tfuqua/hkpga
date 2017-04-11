import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { registerUser } from './actions';
import TextField from '../../components/TextField';
import translations from '../../util/translations';

class Register extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      username: '',
      name: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.registerUser(this.state);
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
          <h2>{translations[this.props.lang].REGISTER}</h2>
          <form onSubmit={this.handleSubmit} className="form">
            <div className="form-group">
              <TextField
                showError={this.state.showErrors}
                text={this.state.username}
                onFieldChanged={this.handleFieldChange('username')}
                placeholder="Email"
              />
            </div>
            <div className="form-group border-less">
              <TextField
                showError={this.state.showErrors}
                text={this.state.name}
                onFieldChanged={this.handleFieldChange('name')}
                placeholder="Name"
              />
            </div>
            <div className="form-group border-less">
              <TextField
                showError={this.state.showErrors}
                text={this.state.password}
                onFieldChanged={this.handleFieldChange('password')}
                type="password"
                placeholder="Password"
              />
            </div>
            <input
              type="submit"
              value={translations[this.props.lang].REGISTER_USER}
              className="btn btn-success btn-block"
            />
          </form>
        </div>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ registerUser }, dispatch);
}

function mapStateToProps(store) {
  return {
    isAuthenticated: store.loginReducer.isAuthenticated,
    lang: store.languageReducer.lang
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
