import React from 'react';
// import Jumbotron from "../components/Jumbotron/Jumbotron"
import Deploy from "../components/Deploy/Deploy"
import logo from '../pages/codrlogo-light.png'
import { ScrollTo } from "react-scroll-to";

import withAuth from './../components/withAuth';
import Background from '../pages/images/laptop3.jpeg';


var sectionStyle = {
    width: "100%",
    height: "87vh",
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    clear: "both", 
    paddingTop: 100, 
    textAlign: "center"
  };
  

function ThankU() {

    return (
        <div style={ sectionStyle }>
            
                <img src={logo} alt="CodrLogo" width="240px" height="200px" /><br></br><br></br><br></br>
                <blockquote className="blockquote">
                    <p className="text-white bg-dark display-4">Thank You for Chosing Us And Cheers To Many More.</p>
                    <footer className="blockquote-footer display-4">From Everyone at <cite title="Source Title">CODR</cite></footer>
                </blockquote>
                <br></br><br></br><br></br>


                <ScrollTo>
                    {({ scrollTo }) => (
                        <button className="btn btn-info" onClick={() => scrollTo({ x: 20, y: 693, smooth: true })}>Learn How to Deploy</button>
                    )}
                </ScrollTo>
            <Deploy />

        </div>


    )


}

export default withAuth(ThankU);