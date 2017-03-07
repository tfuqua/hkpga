import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import Logo from '../../images/hkpga-logo.png';
import translations from '../../util/translations';
import { setLang, getLang } from '../../containers/Lang/actions';
import { logoutUser } from '../../containers/Login/actions';

class Menu extends Component{

  render(){

    return(
            <nav className="navbar navbar-default navbar-fixed-top navbar-inverse" role="navigation">
            <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/"><img alt="Hong Kong PGA" src={Logo} /></Link>
                <span className="brand-text"><h2>HKPGA</h2></span>
                </div>

                <div className="container-fluid collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <div className="clearfix" id="user-nav">

                    {(this.props.authenticated) ?
                        <ul id="user-controls" className="nav navbar-nav navbar-right clearfix">
                            <li><Link to="/dashboard">{translations[this.props.lang].MEMBER_DASHBOARD}</Link></li>
                            <li><a to="#" onClick={this.props.logoutUser}>{translations[this.props.lang].LOGOUT}</a></li>
                        </ul>
                    :
                        <ul id="user-controls" className="nav navbar-nav navbar-right clearfix">
                            <li><Link to="/login">{translations[this.props.lang].LOGIN}</Link></li>
                        </ul>
                    }

                <ul className="nav navbar-nav navbar-right clearfix" id="language-controls">
                    <li className="user-lang"><a onClick={this.props.setLang.bind(this, 'en')}>
                        {translations[this.props.lang].LANG_EN}
                    </a></li>
                    <li className="user-lang"><a onClick={this.props.setLang.bind(this, 'zh-hk')}>
                        {translations[this.props.lang].LANG_ZH_HK}
                    </a></li>
                    <li className="user-lang"><a onClick={this.props.setLang.bind(this, 'zh-cn')}>
                        {translations[this.props.lang].LANG_ZH_CN}
                    </a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right clearfix" id="social-media">
                    <Link to="https://www.facebook.com/thehkpga" target="_blank"><li><i className="fa fa-facebook"></i></li></Link>
                    <Link to="https://twitter.com/thehkpga" target="_blank"><li><i className="fa fa-twitter"></i></li></Link>
                    <Link to="http://weibo.com/u/5209724886" target="_blank"><li><i className="fa fa-weibo"></i></li></Link>
                    </ul>
                </div>

                <ul className="nav navbar-nav navbar-right" id="page-nav">
                    <li><Link to="/">{translations[this.props.lang].MENU_HOME}</Link></li>
                    <li><Link to="/about-us" className="dropdown-toggle" data-toggle="dropdown">{translations[this.props.lang].MENU_ABOUT}</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/about/about-us">{translations[this.props.lang].ABOUT_US}</Link></li>
                        <li><Link to="/about/partners">{translations[this.props.lang].PARTNERS}</Link></li>
                        <li><Link to="/about/committee-honorary">{translations[this.props.lang].COMMITTEE_HONORARY}</Link></li>
                    </ul>
                    </li>
                    <li><Link to="/tournaments" className="dropdown-toggle" data-toggle="dropdown">{translations[this.props.lang].MENU_TOURNAMENTS}</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/tournaments/merit">{translations[this.props.lang].ORDER_OF_MERIT}</Link></li>
                        <li><Link to="/tournaments">{translations[this.props.lang].SCHEDULE_RESULTS}</Link></li>
                    </ul>
                    </li>
                    <li><Link to="/pros" className="dropdown-toggle" data-toggle="dropdown">{translations[this.props.lang].MENU_PROS}</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/pros">{translations[this.props.lang].DIRECTORY}</Link></li>
                        <li><Link to="#/pros/training-program">{translations[this.props.lang].TRAINING_PROGRAM}</Link></li>
                    </ul>
                    </li>
                    <li><Link to="/" className="dropdown-toggle hidden-xs hidden-sm" data-toggle="dropdown">{translations[this.props.lang].MENU_COMMUNITY}</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/community/project-skyhigh">{translations[this.props.lang].PROJECT_SKYHIGH}</Link></li>
                    </ul>
                    </li>
                    <li><Link to="/press/releases" className="dropdown-toggle" data-toggle="dropdown">{translations[this.props.lang].MENU_PRESS}</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/press/releases">{translations[this.props.lang].PRESS_RELEASES}</Link></li>
                        <li><Link to="#/press/media">{translations[this.props.lang].MEDIA_COVERAGE}</Link></li>
                        <li><Link to="#/press/magazine">{translations[this.props.lang].MAGAZINE}</Link></li>
                    </ul>
                    </li>
                    <li id="contact-li"><Link to="/contact">{translations[this.props.lang].MENU_CONTACT}</Link></li>
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
  return bindActionCreators({ getLang, setLang, logoutUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);