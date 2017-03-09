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

                <ul id="user-controls" className="nav navbar-nav navbar-right clearfix">
                    <li><Link to="/admin">{translations[this.props.lang].MEMBER_DASHBOARD}</Link></li>
                    <li><a to="#" onClick={this.props.logoutUser}>{translations[this.props.lang].LOGOUT}</a></li>
                </ul>
                
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

                <div className="clearfix"></div>
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
  return bindActionCreators({ getLang, setLang, logoutUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);