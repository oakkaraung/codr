import React from "react";
import logo from '../../pages/codr-logo.png'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <nav class="navbar navbar-light bg-light">
      <img src={logo} alt="logo" width="50px" height="50px" />
      <Link to="/" class="navbar-brand">Go Home</Link>
    </nav>
  );
}

export default Footer;