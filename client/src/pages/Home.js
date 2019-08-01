import React from 'react';
import logo from '../pages/codrlogo-light.png';
import Jumbotron from "../components/Jumbotron/Jumbotron";
import About from "../components/About/About";
import { ScrollTo } from "react-scroll-to";
import { Link } from 'react-router-dom';


/* Add in Logo here and slides down to about section. */

function Home() {
    return (
        <div>
            <Jumbotron >
                <img src={logo} alt="CodrLogo" width="450px" height="400px" /><br></br><br></br><br></br>
                <ScrollTo>
                    {({ scrollTo }) => (
                        <button className="btn btn-info animateButton" onClick={() => scrollTo({ x: 20, y: 750, smooth: true })}>About Us</button>
                    )}
                </ScrollTo>
                {/* <button type="button" id="aboutScroll" className="btn btn-primary">About</button> */}
            </Jumbotron>
            <About />
            <div>
                <nav class="navbar navbar-light bg-light">
                    <img src={logo} alt="logo" width="50px" height="50px" />
                    <Link to="/profile" class="navbar-brand">Check out the templates!</Link>
                </nav>
            </div>
        </div>

    )
}


export default Home;