import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../Menu';
import AdminMenu from '../Menu/AdminMenu';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header">
          <Menu {...this.props} />
          {this.props.location.pathname.startsWith('/admin') && this.props.isAdmin
            ? <AdminMenu {...this.props} />
            : null}
        </div>
      </header>
    );
  }
}

function mapStateToProps(store) {
  return {
    authenticated: store.loginReducer.isAuthenticated,
    isAdmin: store.loginReducer.isAdmin
  };
}

export default connect(mapStateToProps)(Header);
