import React from "react";
import logo from '../pages/codr-logo.png'

function Header() {
    return (

<header class="masthead text-center text-white">
    <div class="masthead-content">
      <div class="container">
      <img src={logo} alt="logo" width="100px" height="100px" />
        <h1 class="masthead-heading mb-0">One Page Wonder</h1>
        <h2 class="masthead-subheading mb-0">Will Rock Your Socks Off</h2>
        <a href="google.com" class="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
      </div>
    </div>
    <div class="bg-circle-1 bg-circle"></div>
    <div class="bg-circle-2 bg-circle"></div>
    <div class="bg-circle-3 bg-circle"></div>
    <div class="bg-circle-4 bg-circle"></div>
  </header>

    )
}

export default Header;