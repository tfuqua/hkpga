import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TextField from '../../components/TextField';
import { loginUser } from './actions';

class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.loginUser(this.state);
  }

  handleFieldChange(field) {
    return e => {
      this.setState({ ...this.state, [field]: e.target.value });
    };
  }

  render() {
    return this.props.isAuthenticated
      ? <Redirect to="/admin" />
      : <div className="container-fluid">

          <div className="login-form">
            <h2>LOGIN</h2>
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
                  text={this.state.password}
                  onFieldChanged={this.handleFieldChange('password')}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <input type="submit" value="Login" className="btn btn-success btn-block" />
            </form>
          </div>
        </div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginUser }, dispatch);
}

function mapStateToProps(store) {
  return {
    isAuthenticated: store.loginReducer.isAuthenticated
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
