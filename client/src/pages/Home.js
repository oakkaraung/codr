import React from 'react';
import logo from '../pages/codr-logo.png'
import Jumbotron from "../components/Jumbotron/Jumbotron"
import About from "../components/About/About"

/* Add in Logo here and slides down to about section. */

function Home() {
    return (
        <div>
       <Jumbotron>
           <img src={logo} alt="CodrLogo" width="440px" height="400px"/><br></br><br></br><br></br>
           <button type="button" class="btn btn-primary">About</button>
        </Jumbotron>
        <About />
        </div>

    )
}


export default Home;