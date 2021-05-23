import React from 'react';
import './Navbar.css';

function Navbar(props) {
  return (
    <nav className="Navbar">
      <div className="container">
        <span className="header">Simple Calculator</span>
        <div className="options">
          <span className="mode-switch" ><h4>Scientific Mode</h4></span>
          <span className="theme-switch" ><h4>Dark Theme</h4></span>
        </div>           
      </div>
    </nav>
  );
}

export default Navbar;