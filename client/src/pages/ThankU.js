import React from 'react';
import Jumbotron from "../components/Jumbotron/Jumbotron"
import Deploy from "../components/Deploy/Deploy"
import logo from '../pages/codrlogo-light.png'
import { ScrollTo } from "react-scroll-to";



function ThankU() {

    return (
        <div>
            <Jumbotron>
                <img src={logo} alt="CodrLogo" width="240px" height="200px" /><br></br><br></br><br></br>
                <blockquote className="blockquote">
                    <p className="text-white bg-dark display-4">Thank You for Chosing Us And Cheers To Many More.</p>
                    <footer className="blockquote-footer display-4">From Everyone at <cite title="Source Title">CODR</cite></footer>
                </blockquote>
                <br></br><br></br><br></br>


                <ScrollTo>
                    {({ scrollTo }) => (
                        <button onClick={() => scrollTo({ x: 20, y: 720, smooth: true })}>Learn How to Deploy</button>
                    )}
                </ScrollTo>
            </Jumbotron>
            <Deploy />

        </div>


    )


}

export default ThankU;