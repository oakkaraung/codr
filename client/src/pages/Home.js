import React from 'react';
import logo from '../pages/codrlogo-light.png'
import Jumbotron from "../components/Jumbotron/Jumbotron"
import About from "../components/About/About"
import { ScrollTo } from "react-scroll-to";


/* Add in Logo here and slides down to about section. */

function Home() {
    return (
        <div>
            <Jumbotron >
                <img src={logo} alt="CodrLogo" width="450px" height="400px" /><br></br><br></br><br></br>
                <ScrollTo>
                    {({ scrollTo }) => (
                        <button onClick={() => scrollTo({ x: 20, y: 720, smooth: true })}>About Us</button>
                    )}
                </ScrollTo>
                {/* <button type="button" id="aboutScroll" className="btn btn-primary">About</button> */}
            </Jumbotron>
            <About />
        </div>

    )
}


export default Home;