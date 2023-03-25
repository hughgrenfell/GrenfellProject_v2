import React from 'react';
import logo from '../images/reindeer_negative.png';
import { Link } from 'react-router-dom';
import '../css/header-styles.css';
import Login from './Login';

export function Header(props) {

  return (
    <div className="header-container">
      <ul className="site-logo">
        <li className="site-name">The Grenfell Project</li>
        <li className="logo"><img src={logo} alt="Reindeer Logo"/></li>
        <li className="site-menu">
          <nav className="main-nav" id="main-nav">
            <Link to="/">Home</Link>
            <Link to="/projects/">Projects</Link>
            <a href="https://github.com/hughgrenfell" target="_blank" rel="noreferrer">GitHub</a>
          </nav>
        </li>
      </ul>
      <ul className="login">
        <li><Login /></li>  
      </ul>   
    </div>
  );
}