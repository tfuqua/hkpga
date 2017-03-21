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
      <nav className="navbar" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <NavLink className="navbar-brand" to="/">
            {/*<img alt="Hong Kong PGA" src={Logo} className="logo-img"/>*/}
          </NavLink>
        </div>

        <div className="container-fluid collapse navbar-collapse">
          <div className="secondary-nav">
            {this.props.authenticated
              ? <ul className="auth-links">
                  <li>
                    <NavLink to="/admin">
                      {translations[this.props.lang].MEMBER_DASHBOARD}
                    </NavLink>
                  </li>
                  <li>
                    <a to="#" onClick={this.props.logoutUser}>
                      {translations[this.props.lang].LOGOUT}
                    </a>
                  </li>
                </ul>
              : <ul className="auth-links">
                  <li>
                    <NavLink to="/login">
                      {translations[this.props.lang].LOGIN}
                    </NavLink>
                  </li>
                </ul>}

            <ul className="language">
              <li className="user-lang">
                <a onClick={this.props.setLang.bind(this, 'en')}>
                  {translations[this.props.lang].LANG_EN}
                </a>
              </li>
              <li className="user-lang">
                <a onClick={this.props.setLang.bind(this, 'zh-hk')}>
                  {translations[this.props.lang].LANG_ZH_HK}
                </a>
              </li>
              <li className="user-lang">
                <a onClick={this.props.setLang.bind(this, 'zh-cn')}>
                  {translations[this.props.lang].LANG_ZH_CN}
                </a>
              </li>
            </ul>

            <ul className="social">
              <li>
                <a href="https://www.facebook.com/hongkonggolfassociation/" target="_blank">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/thehkpga" target="_blank">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="http://weibo.com/u/5209724886" target="_blank">
                  <i className="fa fa-weibo" />
                </a>
              </li>
            </ul>
          </div>

          <div className="main-nav">
            <ul className="nav navbar-nav navbar-right" id="page-nav">
              <li><NavLink activeClassName="active" to="/admin">Dashboard</NavLink></li>
              <li><NavLink activeClassName="active" to="/admin/articles">Articles</NavLink></li>
              <li><NavLink activeClassName="active" to="/admin/press">Press</NavLink></li>
              <li><NavLink activeClassName="active" to="/admin/pages">Pages</NavLink></li>
              <li><NavLink activeClassName="active" to="/admin/tournaments">Tournaments</NavLink></li>
              <li><NavLink activeClassName="active" to="/admin/users">Users</NavLink></li>
            </ul>
          </div>

        </div>
      </nav>
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
