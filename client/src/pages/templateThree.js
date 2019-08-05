import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './templateThree.css'

/* THIS IS OUR FIRST TEMPLATE PAGE */

function download(
    filename,
    form1value,
    form2value,
    form3value,
    form4value,
    form5value,
    form6value,
    form7value,
    form8value,
    form9value
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

    <!--below you will see some things wrapped in a "stlyle" tag, this adds the styles such as colors and sizing of fonts, borders and anything visual
    that you will see on your website-->

    <style>
        .currentTheme {
            background-image: url("https://images.pexels.com/photos/2346344/pexels-photo-2346344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
            background-size: 'cover';
            background-size: 100% 800px;
            height:680px;
        }
        .jumbotron {
            border-radius: 0 !important;
        }
        .display-3 {
            color:#fff;
        }
        #h2Header {
            color:#fff;
        }
    </style>
    </head>

    <!--this section is called the body, the bulk of all your website will be stored here-->

    <body>

        <!--one way to think about a "div" is an imaginary box you can fill with whatever you would like. think of it as a container
        you can use the styling we saw earlier to make them large, small, add a border or fill with a color are some examples-->

        <div>

            <!--when you add classes to divs you can stlye all of them together with the name you assign them all at once!
            when you use the Bootstrap cdn like we did above there are specific class names you can assign to elements to do the styling for you
            below you will see the name "jumbotron" this is called a component or a pre made object you can use from bootstrap-->

            <div class="jumbotron currentTheme">

                <!--headers are commonly used at the top of websites similar to a letterhead-->

                <header class="masthead text-center text-black">
                    <div class="masthead-content">
                        <div class="container">
                        <br /><br /><br /><br /><br />
                            <h1 class="display-3" type="text" placeholder="Welcome to my Website!" >${form1value}</h1>
                            <br /><br /><br />
                            <h2 id="h2Header"class="masthead-subheading mb-0">${form2value}</h2>
                        </div>
                    </div>
                    <div class="bg-circle-1 bg-circle"></div>
                    <div class="bg-circle-2 bg-circle"></div>
                    <div class="bg-circle-3 bg-circle"></div>
                    <div class="bg-circle-4 bg-circle"></div>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                </header>
            </div>

            <!--when you split code into sections you get to work in what you can think of as building blocks
            when you finish one section you can add another section below and when they all come together you have editable areas you can work in-->

            <section>

                <!--before we explained divs are like containers and this one we use the class of "container" to pull in the Bootstrap style
                the name container here is only in reference to a style, the div is the actual container-->

                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 order-lg-2">
                            <div class="p-5">

                                <!--here is where an image is added. there are 2 ways of adding images to your website
                                below is one way where you call the URL of the picture that is already hosted online through some sort of image hosting website
                                you may also use pictures you have on your computer with what is called routing where you store the images in a file and use
                                a file route to tell your website where the image is. for ease and basic use we suggest doing it this way until you have a better
                                understanding of the flow for your site
                                this is an example of a self closing tag below notice how there is no </img> there is only a slash at the end of the line so make it self closing-->

                                <img class="img-fluid rounded-circle" src="https://thumbs-prod.si-cdn.com/yxYtidKUcbMprBCzkC3AH2cnUQ4=/420x240/https://public-media.si-cdn.com/filer/54/10/5410da58-2295-4e3a-a847-fecd41cdcdd9/scarlet_tanager.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6 order-lg-1">
                            <div class="p-5">
                                <h2 class="display-4">${form3value}</h2>
                                <p>${form4value}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!--below you will see almost the same thing you saw in the previous section but with different information added in.-->

            <section>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="p-5">
                                <img class="img-fluid rounded-circle" src="https://www.hakaimagazine.com/wp-content/uploads/header-gulf-birds.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="p-5">
                                <h2 class="display-4">${form5value}</h2>
                                <p>${form6value}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 order-lg-2">
                            <div class="p-5">
                                <img class="img-fluid rounded-circle" src="http://justbirding.com/wp-content/uploads/2018/11/most-colorful-birds-on-the-planet.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6 order-lg-1">
                            <div class="p-5">
                                <h2 class="display-4">${form7value}</h2>
                                <p>${form8value}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!--a footer tag is used very similar to a header tag but at the bottom of the page-->

            <footer class="py-5 bg-black">
                <div class="container">
                    <p class="m-0 text-center text-black small">${form9value}</p>
                </div>
            </footer>
        </div>

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

class TemplateThree extends Component {

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            // Start page Design
            <div>
                <header class="masthead d-flex">
                    <div class="container text-center my-auto">
                        <h1 class="mb-1">Stylish Portfolio</h1>
                        <h3 class="mb-5">
                            <em>A Free Bootstrap Theme by Start Bootstrap</em>
                        </h3>
                        <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                    </div>
                    <div class="overlay"></div>
                </header>

                {/* Page style is above */}
                <section>
                    <div className="row">
                        <div className="col-lg-1 mx-auto">
                            <Link to="/thankyou">
                                <button className="btn btn-primary" onClick={() => {
                                    var formInput1 = document.getElementById("h1Input").value;
                                    var formInput2 = document.getElementById("h2Input").value;
                                    var formInput3 = document.getElementById("h3Input").value;
                                    var formInput4 = document.getElementById("h4Input").value;
                                    var formInput5 = document.getElementById("h5Input").value;
                                    var formInput6 = document.getElementById("h6Input").value;
                                    var formInput7 = document.getElementById("h7Input").value;
                                    var formInput8 = document.getElementById("h8Input").value;
                                    var formInput9 = document.getElementById("h9Input").value;
                                    this.componentDidUpdate()
                                    download("index.html",
                                        formInput1,
                                        formInput2,
                                        formInput3,
                                        formInput4,
                                        formInput5,
                                        formInput6,
                                        formInput7,
                                        formInput8,
                                        formInput9
                                    )
                                }}>download</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div >
        )

    }
}


export default TemplateThree;