import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu';

class Header extends Component{
  
  render(){
    return(
      <header>
        <div className="header">
          <Menu/>
        </div>      
      </header>
    );
  }
}

export default Header;
