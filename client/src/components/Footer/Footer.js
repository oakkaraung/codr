import React from "react";
import logo from '../../pages/codr-logo.png'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div style={{paddingTop:80}}>
      <nav class="navbar navbar-light bg-light">
        <img src={logo} alt="logo" width="50px" height="50px" />
        <Link to="/" class="navbar-brand">Go Home</Link>
      </nav>
    </div>
  );
}

export default Footer;