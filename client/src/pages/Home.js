import React from 'react';
import logo from '../pages/codrlogo-light.png'
import Jumbotron from "../components/Jumbotron/Jumbotron"
import FrontPage from "../components/CodrInfo/FrontPage"
import { ScrollTo } from "react-scroll-to";


/* Add in Logo here and slides down to about section. */

function Home() {
    return (
        <div>
            <Jumbotron >
                <img src={logo} alt="CodrLogo" width="450px" height="400px" /><br></br><br></br><br></br>
                <p>click here to learn why to use our app!</p>
                <ScrollTo>
                    {({ scrollTo }) => (
                        <button className="btn btn-info animateButton" onClick={() => scrollTo({ x: 20, y: 755, smooth: true })}>Why Use Us?</button>
                    )}
                </ScrollTo>
                {/* <button type="button" id="aboutScroll" className="btn btn-primary">About</button> */}
            </Jumbotron>
            <FrontPage />
        </div>
    )
}


export default Home;