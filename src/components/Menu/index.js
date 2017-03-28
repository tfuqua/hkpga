import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../images/hkpga-logo.png';
import translations from '../../util/translations';
import { setLang, getLang } from '../../containers/Lang/actions';
import { logoutUser } from '../../containers/Login/actions';
import { getPageBySlug } from '../../containers/Pages/actions';

class Menu extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">
              {<img alt="Hong Kong PGA" src={Logo} className="logo-img" />}
            </Link>
          </div>

          <div className="container-fluid collapse navbar-collapse">
            <div className="secondary-nav">
              {this.props.authenticated
                ? <ul className="auth-links">
                    <li>
                      <NavLink activeClassName="active" to="/admin">
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
                      <NavLink activeClassName="active" to="/login">
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
            </div>

            <div className="main-nav">
              <ul className="nav navbar-nav navbar-right" id="page-nav">
                <li>
                  <NavLink activeClassName="active" exact to="/">{translations[this.props.lang].MENU_HOME}</NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    to="/about/about-us"
                    onClick={this.props.getPageBySlug.bind(this, 'about-us')}>
                    {translations[this.props.lang].MENU_ABOUT}
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/about/about-us"
                        onClick={this.props.getPageBySlug.bind(this, 'about-us')}>
                        {translations[this.props.lang].ABOUT_US}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/about/partners">
                        {translations[this.props.lang].PARTNERS}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/about/committee-honorary">
                        {translations[this.props.lang].COMMITTEE_HONORARY}
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/tournaments">
                    {translations[this.props.lang].MENU_TOURNAMENTS}
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink activeClassName="active" to="/tournaments/merit">
                        {translations[this.props.lang].ORDER_OF_MERIT}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/tournaments">
                        {translations[this.props.lang].SCHEDULE_RESULTS}
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/pros">
                    {translations[this.props.lang].MENU_PROS}
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink activeClassName="active" to="/pros">
                        {translations[this.props.lang].DIRECTORY}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/pros/training-program"
                        onClick={this.props.getPageBySlug.bind(this, 'training-program')}>
                        {translations[this.props.lang].TRAINING_PROGRAM}
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    to="/community/project-skyhigh"
                    className="dropdown-toggle hidden-xs hidden-sm"
                    onClick={this.props.getPageBySlug.bind(this, 'project-skyhigh')}>
                    {translations[this.props.lang].MENU_COMMUNITY}
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/community/project-skyhigh"
                        onClick={this.props.getPageBySlug.bind(this, 'project-skyhigh')}>
                        {translations[this.props.lang].PROJECT_SKYHIGH}
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/press/releases" className="dropdown-toggle">
                    {translations[this.props.lang].MENU_PRESS}
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink activeClassName="active" to="/press/releases">
                        {translations[this.props.lang].PRESS_RELEASES}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/press/media">
                        {translations[this.props.lang].MEDIA_COVERAGE}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/press/magazine">
                        {translations[this.props.lang].MAGAZINE}
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li id="contact-li">
                  <NavLink activeClassName="active" to="/contact" exact>
                    {translations[this.props.lang].MENU_CONTACT}
                  </NavLink>
                </li>
              </ul>
            </div>

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
  return bindActionCreators({ getLang, setLang, logoutUser, getPageBySlug }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
