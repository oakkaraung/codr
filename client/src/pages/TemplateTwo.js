import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './templateTwo.css'
import ReactTooltip from 'react-tooltip'


/* THIS IS OUR FIRST TEMPLATE PAGE */

function download(
    filename,
    form1value,
    form2value,
    form3value,
    form4value,
    form5value,
    form6value
) {
    var fileContent = "";
    fileContent += `<html lang="en">
    <head>
    <!--thank you for choosing Codr for your website!
    below is the code for your fully functional site, and weve added notes for you
    all of the lines of green text are notes we've added to help build an understanding of what is going on in this code

    any time you see a word wrapped in <  > you are looking at what is called a "tag" and there are 2 tags to every element
    you must close these tags by using a slash in the second portion like this <tag> <--- open </tag> <--- closed 
    you will need an opening and closing tag for every element 

    there are some special elements that do not require you to close because they are what is called "self closing"
    we will go over a self closing tag below when we encounter one

    this line of code below is calling on whats called a "cdn" for Bootstrap! a library for html whitch adds styling and mobile responsiveness-->

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Yellowtail&display=swap" rel="stylesheet">

    <!--below you will see some things wrapped in a "stlyle" tag, this adds the styles such as colors and sizing of fonts, borders and anything visual
    that you will see on your website-->

    <style>
    
    .bgroundImage {
        background-image: url("./bcardbackground.jpg");
       }
    
    .cardInput {
        background: transparent !important;
        border: 0px !important;
    }
    
    .name {
        font-family: 'Permanent Marker', cursive;
        float: right;
    }
    
    .name::placeholder {
        font-family: 'Permanent Marker', cursive;
    
    }
    
    .bodyText {
        color: #fff;
        text-align: justify;
        font-family: 'Yellowtail', cursive;
    }
    
    .bodyText::placeholder {
        color: #fff;
        opacity: 1; /* Firefox */
        text-align: justify;
        font-family: 'Yellowtail', cursive;
    }
    
    #h1Input {
        color:#fff;
    }
    
    #h2Input {
        color:#fff;
    }
    
    #h3Input {
        color:#fff;
    }
    
    #h4Input {
        color:#fff;
    }
    
    #h5Input {
        color:#fff;
    }
    
    #h1Input::placeholder {
        color: #fff;
        opacity: 1; /* Firefox */
    }
    
    #h2Input::placeholder {
        color: #fff;
        opacity: 1; /* Firefox */
    }
    
    #h3Input::placeholder {
        color: #fff;
        opacity: 1; /* Firefox */
    }
    
    #h4Input::placeholder {
        color: #fff;
        opacity: 1; /* Firefox */
    }
    
    #h5Input::placeholder {
        color: #fff;
        opacity: 1; /* Firefox */
    }

    </style>

    </head>

    <!--this section is called the body, the bulk of all your website will be stored here-->

    <body>

        <!--one way to think about a "div" is an imaginary box you can fill with whatever you would like. think of it as a container
        you can use the styling we saw earlier to make them large, small, add a border or fill with a color are some examples-->

        <div>
                <section>
                    <div class="container=fluid" class="bgroundImage">
                        <div class="row align-items-center">
                            <div class="col-lg-6 order-lg-2">
                            </div>
                            <div class="col-lg-12 order-lg-1">
                                <div class="p-5">
                                    <form>
                                        <h1 type="text" id="h1Input" class="display-4 name">${form1value}</h1>
                                        <h3 type="text" id="h2Input" class="form-control form-control-lg cardInput">${form2value}</h3>
                                        <h3 type="text" id="h3Input" class="form-control form-control-lg cardInput">${form3value}</h3>
                                        <h3 type="text" id="h4Input" class="form-control form-control-lg cardInput">${form4value}</h3>
                                        <br></br>
                                        <p type="text" align="top" id="h5Input" class="bodyText">${form5value}</textarea>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer class="py-6 bg-black text-center">
                    <div class="container">
                        <h4 type="text" id="h9Input" class="m-0 text-center text-black small footercss">${form6value}</h4>
                    </div>

                </footer>

        <!--these script tags you see are also a part of what is needed for Bootstrap to style everthing correctly
        thier website getbootstrap.com has a wide variety of things you can add and edit to your page-->

        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    </body>

</html>`
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileContent));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

class TemplateTwo extends Component {

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <section>
                    <div className="container=fluid" class="bgroundImage">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                            </div>
                            <div className="col-lg-12 order-lg-1">
                                <div className="p-5">
                                    <form>
                                        <input data-tip data-for="H1" type="text" id="oneInput" placeholder="Name Here" className="display-4 name"></input>
                                        <ReactTooltip id="H1" aria-haspopup="true"  >
                                            <p> using H1 for bigger size, also using css we can determine the positioning</p>

                                        </ReactTooltip>
                                        <input data-tip data-for="form" type="text" id="twoInput" placeholder="Title" class="form-control form-control-lg cardInput"></input>
                                        <input type="text" id="threeInput" placeholder="Phone Number" class="form-control form-control-lg cardInput"></input>
                                        <input type="text" id="fourInput" placeholder="Email Address" class="form-control form-control-lg cardInput"></input>
                                        <br></br>
                                        <textarea type="text" align="top" id="fiveInput" className="bodyText form-control-lg" placeholder="Use this section as a place to add some information about yourself. We designed this digital business card as a green answer to a commonly used networking tool. Wow your next contact with this simple, yet elegant bit of technology and save tons of money by not printing cards that will get lost in a wallet. Leave a lasting impression with a digital version catered to your information for free!"></textarea>
                                    </form>
                                    <ReactTooltip id="form" aria-haspopup="true">
                                        <p>using different H tags such as H1, H2 and etc, we can separate our input fields</p>
                                        <p>using the STYLE tag we can target individual tags, and style them</p>

                                    </ReactTooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="py-6 bg-black text-center">
                    <div className="container">
                        <input type="text" id="sixInput" className="m-0 text-center text-black small footercss" placeholder="Copyright &copy; Your Business Card 2019"></input>
                    </div>

                </footer>

                <section>
                    <div className="row">
                        <div className="col-lg-1 mx-auto">
                            <Link to="/thankyou">
                                <button data-tip data-for="button" className="btn btn-primary" onClick={() => {
                                    var formInput1 = document.getElementById("oneInput").value;
                                    var formInput2 = document.getElementById("twoInput").value;
                                    var formInput3 = document.getElementById("threeInput").value;
                                    var formInput4 = document.getElementById("fourInput").value;
                                    var formInput5 = document.getElementById("fiveInput").value;
                                    var formInput6 = document.getElementById("sixInput").value;
                                    this.componentDidUpdate()
                                    download("index.html",
                                        formInput1,
                                        formInput2,
                                        formInput3,
                                        formInput4,
                                        formInput5,
                                        formInput6
                                    )
                                }}>download</button>
                                <ReactTooltip id="button" aria-haspopup="true"  >
                                    <p> this will export your file as a HTML file!</p>

                                </ReactTooltip>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        )

    }
}


export default TemplateTwo;