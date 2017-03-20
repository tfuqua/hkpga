import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import Logo from "../../images/hkpga-logo.png";
import translations from "../../util/translations";
import { setLang, getLang } from "../../containers/Lang/actions";
import { logoutUser } from "../../containers/Login/actions";

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
          <Link className="navbar-brand" to="/">
            {/*<img alt="Hong Kong PGA" src={Logo} className="logo-img"/>*/}
          </Link>
        </div>

        <div className="container-fluid collapse navbar-collapse">
          <div className="secondary-nav">
            {this.props.authenticated
              ? <ul className="auth-links">
                  <li>
                    <Link to="/admin">
                      {translations[this.props.lang].MEMBER_DASHBOARD}
                    </Link>
                  </li>
                  <li>
                    <a to="#" onClick={this.props.logoutUser}>
                      {translations[this.props.lang].LOGOUT}
                    </a>
                  </li>
                </ul>
              : <ul className="auth-links">
                  <li>
                    <Link to="/login">
                      {translations[this.props.lang].LOGIN}
                    </Link>
                  </li>
                </ul>}

            <ul className="language">
              <li className="user-lang">
                <a onClick={this.props.setLang.bind(this, "en")}>
                  {translations[this.props.lang].LANG_EN}
                </a>
              </li>
              <li className="user-lang">
                <a onClick={this.props.setLang.bind(this, "zh-hk")}>
                  {translations[this.props.lang].LANG_ZH_HK}
                </a>
              </li>
              <li className="user-lang">
                <a onClick={this.props.setLang.bind(this, "zh-cn")}>
                  {translations[this.props.lang].LANG_ZH_CN}
                </a>
              </li>
            </ul>

            <ul className="social">
              <Link to="https://www.facebook.com/thehkpga" target="_blank">
                <li><i className="fa fa-facebook" /></li>
              </Link>
              <Link to="https://twitter.com/thehkpga" target="_blank">
                <li><i className="fa fa-twitter" /></li>
              </Link>
              <Link to="http://weibo.com/u/5209724886" target="_blank">
                <li><i className="fa fa-weibo" /></li>
              </Link>
            </ul>
          </div>

          <div className="main-nav">
            <ul className="nav navbar-nav navbar-right" id="page-nav">
              <li><Link to="/admin">Dashboard</Link></li>
              <li><Link to="/admin/articles">Articles</Link></li>
              <li><Link to="/admin/press">Press</Link></li>
              <li><Link to="/admin/pages">Pages</Link></li>
              <li><Link to="/admin/tournaments">Tournaments</Link></li>
              <li><Link to="/admin/users">Users</Link></li>
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
