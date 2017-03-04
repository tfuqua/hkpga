import React, { Component } from 'react';
import Logo from '../../images/hkpga-logo.png';
import { Link } from 'react-router-dom';

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

                <ul id="user-controls" className="nav navbar-nav navbar-right clearfix">
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/logout">LOGOUT</Link></li>
                    <li><Link to="/login">LOGIN</Link></li>
                    <li><Link to="/admin"><i className="fa fa-gear"></i></Link></li>
                </ul>

                <ul className="nav navbar-nav navbar-right clearfix" id="language-controls">
                    <li className="user-lang"><Link to="#">EN</Link></li>
                    <li className="user-lang"><Link to="#">HK</Link></li>
                    <li className="user-lang"><Link to="#">CN</Link></li>
                </ul>

                <ul className="nav navbar-nav navbar-right clearfix" id="social-media">
                    <Link to="https://www.facebook.com/thehkpga" target="_blank"><li><i className="fa fa-facebook"></i></li></Link>
                    <Link to="https://twitter.com/thehkpga" target="_blank"><li><i className="fa fa-twitter"></i></li></Link>
                    <Link to="http://weibo.com/u/5209724886" target="_blank"><li><i className="fa fa-weibo"></i></li></Link>
                    </ul>
                </div>

                <ul className="nav navbar-nav navbar-right" id="page-nav">
                    <li><Link to="/">MENU_HOME</Link></li>
                    <li><Link to="/about-us" className="dropdown-toggle" data-toggle="dropdown">MENU_ABOUT</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/about/about-us"> / <span > ABOUT_US </span> </Link></li>
                        <li><Link to="/about/partners"> / <span > PARTNERS </span> </Link></li>
                        <li><Link to="/about/committee-honorary"> / <span >COMMITTEE_HONORARY </span> </Link></li>
                    </ul>
                    </li>
                    <li><Link to="/tournaments" className="dropdown-toggle" data-toggle="dropdown">MENU_TOURNAMENTS</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/tournaments/merit"> / <span > ORDER_OF_MERIT </span> </Link></li>
                        <li><Link to="/tournaments"> / <span > SCHEDULE_RESULTS</span> </Link></li>
                    </ul>
                    </li>
                    <li><Link to="/pros" className="dropdown-toggle" data-toggle="dropdown">MENU_PROS</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/pros"> / <span > DIRECTORY </span> </Link></li>
                        <li><Link to="#/pros/training-program"> / <span > TRAINING_PROGRAM </span> </Link></li>
                    </ul>
                    </li>
                    <li><Link to="/" className="dropdown-toggle hidden-xs hidden-sm" data-toggle="dropdown">MENU_COMMUNITY</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/community/project-skyhigh"> / <span > PROJECT_SKYHIGH </span> </Link></li>
                    </ul>
                    </li>
                    <li><Link to="/press/releases" className="dropdown-toggle" data-toggle="dropdown">MENU_PRESS</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/press/releases"> / <span > PRESS_RELEASES </span></Link></li>
                        <li><Link to="#/press/media"> / <span > MEDIA_COVERAGE </span> </Link></li>
                        <li><Link to="#/press/magazine"> / <span > MAGAZINE </span></Link></li>
                    </ul>
                    </li>
                    <li id="contact-li"><Link  to="/contact">MENU_CONTACT</Link></li>
                </ul>

                </div>
            </div>
            </nav>

    );
  }
}

export default Menu;
