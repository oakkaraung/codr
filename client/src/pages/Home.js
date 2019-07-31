import React from 'react';
import logo from '../pages/codrlogo-light.png'
import Jumbotron from "../components/Jumbotron/Jumbotron"
import About from "../components/About/About"

/* Add in Logo here and slides down to about section. */

function Home() {
    return (
        <div>
       <Jumbotron >
           <img src={logo} alt="CodrLogo" width="450px" height="400px"/><br></br><br></br><br></br>
           <button type="button" className="btn btn-primary">About</button>
        </Jumbotron>
        <About />
        </div>

    )
}


export default Home;