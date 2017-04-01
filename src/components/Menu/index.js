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
  constructor(props, context) {
    super(props, context);

    this.state = {
      showMenu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({ showMenu: false });
    }
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <nav className="navbar" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              onClick={this.toggleMenu}
              type="button"
              className={`navbar-toggle ${this.state.showMenu ? 'open' : ''}`}>
              <span />
              <span className="sr-only">Toggle navigation</span>
            </button>
            <Link className="navbar-brand" to="/">
              <span className="brand">HKPGA</span>
              <img alt="Hong Kong PGA" src={Logo} className="logo-img" />
            </Link>
          </div>

          <div className={`collapse navbar-collapse ${this.state.showMenu ? 'in' : ''}`}>
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
                <li className={`user-lang ${this.props.lang === 'en' ? 'active' : ''}`}>
                  <a onClick={this.props.setLang.bind(this, 'en')}>
                    {translations[this.props.lang].LANG_EN}
                  </a>
                </li>
                <li className={`user-lang ${this.props.lang === 'zh-hk' ? 'active' : ''}`}>
                  <a onClick={this.props.setLang.bind(this, 'zh-hk')}>
                    {translations[this.props.lang].LANG_ZH_HK}
                  </a>
                </li>
                <li className={`user-lang ${this.props.lang === 'zh-cn' ? 'active' : ''}`}>
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
                      <NavLink activeClassName="active" to="/merit">
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
