import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/hkpga-logo.png';
import translations from '../../util/translations';
import { setLang, getLang } from '../../containers/Lang/actions';
import { logoutUser } from '../../containers/Login/actions';

class Menu extends Component {
  render() {
    return (
      <div className="admin-nav">
        <div className="container-fluid">
          <nav role="navigation">
            <ul className="nav navbar-nav navbar-right">
              <li><NavLink activeClassName="active" to="/admin">Dashboard</NavLink></li>
              <li><NavLink activeClassName="active" to="/admin/articles">Articles</NavLink></li>
              <li><NavLink activeClassName="active" to="/admin/press">Press</NavLink></li>
              <li><NavLink activeClassName="active" to="/admin/pages">Pages</NavLink></li>
              <li><NavLink activeClassName="active" to="/admin/tournaments">Tournaments</NavLink></li>
              <li><NavLink activeClassName="active" to="/admin/users">Users</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    lang: store.languageReducer.lang,
    authenticated: store.loginReducer.isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLang, setLang, logoutUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
