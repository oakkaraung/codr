import React from 'react';
import Jumbotron from "../components/Jumbotron/Jumbotron"
import Deploy from "../components/Deploy/Deploy"
import logo from '../pages/codr-logo.png'

function ThankU() {

    return (
        <div>
            <Jumbotron>
                <img src={logo} alt="CodrLogo" width="240px" height="200px" /><br></br><br></br><br></br>
                <blockquote class="blockquote">
                    <p class="display-4">Thank You for Chosing Us And Cheers To Many More.</p>
                    <footer class="blockquote-footer display-4">From Everyone at <cite title="Source Title">CODR</cite></footer>
                </blockquote>
                <br></br><br></br><br></br>


                <button type="button" class="btn btn-primary">Learn To Deploy</button>
            </Jumbotron>
            <Deploy />

        </div>


    )


}

export default ThankU;