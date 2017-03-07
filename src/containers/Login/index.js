import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firebaseAuth } from '../../database';
import { loginUser } from './actions'

class Login extends Component {
  constructor(props, context) {
     super(props, context);

     this.state = {
       username: '',
       password: ''
     }
     
    
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleFieldChange = this.handleFieldChange.bind(this);

  }

  handleSubmit(e){
    e.preventDefault();
    this.props.loginUser(this.state);
  }

 handleFieldChange(e){
    this.setState(Object.assign(this.state, {[e.target.name]: e.target.value}));
  }

  render() {

    return (
      <div>
        {this.props.isAuthenticated ?
          <Redirect to='/admin/dashboard'/>
          :
            <div id="login-page">
              <div className="auth-forms well">

              <h2>LOGIN</h2>
              <form onSubmit={this.handleSubmit} className="form">
                  <input name="username" type="text" className="form-control" placeholder="Email"
                    value={this.state.username} onChange={this.handleFieldChange} />
                  <input name="password" type="password" className="form-control" placeholder="Password"
                    value={this.state.password} onChange={this.handleFieldChange} />
                  <input type="submit" value="Login" className="button button-primary btn-block"/>
              </form>
              </div>
            </div>
          }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginUser }, dispatch)
}

function mapStateToProps(store) {
  return {
    isAuthenticated: store.loginReducer.isAuthenticated
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
