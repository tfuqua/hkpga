import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu';
import AdminMenu from '../Menu/AdminMenu';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header">
          <Menu />
          {this.props.location.pathname.startsWith('/admin') ? <AdminMenu /> : null}
        </div>
      </header>
    );
  }
}

export default Header;
