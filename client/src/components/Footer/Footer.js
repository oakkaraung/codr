import React, { Component } from "react";
import logo from '../../pages/codr-logo.png'
import { Link } from 'react-router-dom';


class Footer extends Component {

  componentDidUpdate() {
    window.scrollTo(0,0);
  }

render () {
  return (
    <div style={{paddingTop:80}}>
      <nav class="navbar navbar-light bg-light">
        <img src={logo} alt="logo" width="50px" height="50px" />
        <Link to="/" class="navbar-brand" onClick={this.componentDidUpdate}>Go Home</Link>
      </nav>
    </div>
  );
}
}

export default Footer;