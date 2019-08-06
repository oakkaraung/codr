import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './templateThree.css'
import ReactTooltip from 'react-tooltip'

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
    form9value,
    form10value,
    form11value,
    form12value,
    form13value,
    form14value,
    form15value,
    form16value,
    form17value,
    form18value,
    form19value,
    form20value,
    form21value,
    form22value,
    form23value,
    form24value,
    form25value,
    form26value,
    form27value,
    form28value,
    form29value,
    form30value,
    form31value

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

    These lines of code below are calling on whats called a "cdn" for Bootstrap! a library for html whitch adds styling and mobile responsiveness-->

    <!-- Bootstrap Core CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>

    <!--below you will see some things wrapped in a "style" tag, this adds the styles such as colors and sizing of fonts, borders and anything visual
    that you will see on your website-->

    <style>
    .blue {
        height: 100vh;
        background-color: rgb(30, 153, 153);
        padding: 40px;
        text-align: center;
    }
    
    .title {
        background-color:  rgb(2, 97, 97);
        padding: 10px;
        margin: 20px;
    }
    .lines {
        border-bottom: 2px solid darkcyan;
        justify-content: center;
    }
    #profile {
        overflow-wrap: break-word;
    }
    </style>
    </head>

    <!--this section is called the body, the bulk of all your website will be stored here-->

    <body>

        <!--one way to think about a "div" is an imaginary box you can fill with whatever you would like. think of it as a container
        you can use the styling we saw earlier to make them large, small, add a border or fill with a color are some examples-->


            <!--when you add classes to divs you can stlye all of them together with the name you assign them all at once!
            when you use the Bootstrap cdn like we did above there are specific class names you can assign to elements to do the styling for you
            below you will see the name "jumbotron" this is called a component or a pre made object you can use from bootstrap-->


            <section class="resume">
            <div class="row">
                <div class="col-md-3 col-sm-12 blue">
                    <h1>${form1value}</h1>
                    <h5>${form2value}</h5>
                    <br /><br />
                    <h3 class="title">Personal Info</h3>
                    <h5>Address</h5>
                    <h6>${form3value}</h6>
                    <h5>Phone Number</h5>
                    <h6>${form4value}</h6>
                    <br /><br />
                    <h3 class="title">Skills</h3>
                    <p>${form5value}</p>
                    <p>${form6value}</p>
                    <p>${form7value}</p>
                </div>
    
                <div class="col-md-1"></div>
                <div class="col-md-7 col-sm-12">
                    <br /><br />
                    <h4 class="lines">Profile</h4>
                    <p id="profile">${form8value}</p>
                    <h4 class="lines">Work History</h4>
                    <div class="row">
                        <div class="col-md-2">
                            <p>${form9value} <br/> ${form10value}</p>
                        </div>
                        <div class="col-md-10">
                            <h5>${form11value}</h5>
                            <h6>${form12value}</h6>
                            <ul>
                                <li>${form13value}</li>
                                <li>${form14value}</li>
                                <li>${form15value}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <p>${form16value} <br/> ${form17value}</p>
                        </div>
                        <div class="col-md-10">
                            <h5>${form18value}</h5>
                            <h6>${form19value}</h6>
                            <ul>
                                <li>${form20value}</li>
                                <li>${form21value}</li>
                                <li>${form22value}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <p>${form23value} <br/> ${form24value}</p>
                        </div>
                        <div class="col-md-10">
                            <h5>${form25value}</h5>
                            <h6>${form26value}</h6>
                            <ul>
                                <li>${form27value}</li>
                                <li>${form28value}</li>
                                <li>${form29value}</li>
                            </ul>
                        </div>
                    </div>
                    <h4 class="lines">Education</h4>
                    <div class="row">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-10">
                            <h5>${form30value}</h5>
                            <p>${form31value}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        </section>
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
                <section className="resume">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 blue">
                        <input data-tip data-for="name" type="text" id="name" placeholder="Bobby Jones" className="h3 text-center"></input>
                        <ReactTooltip id="name" aria-haspopup="true"  >
                                <p>with an INPUT tag we can indicate user input field</p>
                        </ReactTooltip>
                        <br />
                            <input type="text" id="occupation" placeholder="Software Programmer" className="h6 text-center"></input>
                            <br /><br />
                            <h3 class="title">Personal Info</h3>
                            <h5>Address</h5>
                            <input type="text" id="address" placeholder="San Diego, CA, 92116" className="h6 text-center"></input>
                            <h5>Phone Number</h5>
                            <input type="text" id="phoneNum" placeholder="(555)-555-5555" className="h6 text-center"></input>
                            <br /><br /><br />
                            <h3 class="title">Skills</h3>
                            <input data-tip data-for="skill" type="text" id="skillOne" placeholder="Time Management" className="h5 text-center"></input>
                            <ReactTooltip id="skill" aria-haspopup="true"  >
                                <p>we can use the same h tag to keep a uniformity to our text</p>
                            </ReactTooltip>
                            <input type="text" id="skillTwo" placeholder="Decision Making" className="h5 text-center"></input>
                            <input type="text" id="skillThree" placeholder="Communication" className="h5 text-center"></input>

                        </div>

                        <div className="col-md-1"></div>
                        <div className="col-md-7 col-sm-12">
                            <br /><br />
                            <h4 className="lines">Profile</h4>
                            <div className="container">
                            <textarea data-tip data-for="profile" type="text" id="profile" placeholder="Highly organized and meticulous Programmer with experience in corporate office
                                settings. Adept at preparing and maintaining files, collaborating with a team and writing efficient code. Good communicator and planner with strong judgment and critical thinking abilities." className="bodyText"></textarea>
                        <ReactTooltip id="profile" aria-haspopup="true"  >
                                <p>A TEXTAREA can hold an unlimited number of characters, and the text renders in a fixed-width font </p>
                                <p>we can use TEXTAREA tag whitch defines a multi-line text input control</p>
                        </ReactTooltip>
                            </div>
                            <h4 className="lines">Work History</h4>
                            <div className="row">
                                <div className="col-md-2">
                                    <input type="text" id="jobStart1" placeholder="02/2018 -" className="h6 date"></input>
                                    <input type="text" id="jobEnd1" placeholder="Current" className="h6 date"></input>
                                </div>
                                <div className="col-md-10">
                                <input type="text" id="jobTitle1" placeholder="React Developer" className="h4"></input>
                                <input data-tip data-for="list" type="text" id="jobDescription1" placeholder="Company A, San Francisco, CA" className="h6"></input>
                                    <ul>
                                        <li><textarea type="text" id="taska1" className="TaskText" placeholder="Responsible for development of new highly-responsive, web-based user interface."></textarea></li>
                                        <li><textarea type="text" id="taska2" className="TaskText" placeholder="Construct visualizations that are able to depict vast amounts of data."></textarea></li>
                                        <li><textarea type="text" id="taska3" className="TaskText" placeholder="Work and collaborate with the rest of the engineering team."></textarea></li>
                                    </ul>
                                    <ReactTooltip id="list" aria-haspopup="true"  >
                                        <p>we can use code to sort our text </p>
                                        <p>The UL tag defines an unordered (bulleted) list</p>
                                    </ReactTooltip>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                <input type="text" id="jobStart2" placeholder="06/2016 -" className="h6 date"></input>
                                    <input type="text" id="jobEnd2" placeholder="02/2018" className="h6 date"></input>
                                </div>
                                <div className="col-md-10">
                                <input data-tip data-for="job" type="text" id="jobTitle2" placeholder="Junior Designer" className="h4"></input>
                                <ReactTooltip id="job" aria-haspopup="true"  >
                                    <p>Don't forget to fill everything out!</p>
                                </ReactTooltip>
                                <input type="text" id="jobDescription2" placeholder="Company B, San Diego, CA" className="h6"></input>
                                    <ul>
                                        <li><textarea type="text" id="taskb1" className="TaskText" placeholder="Producing clean, efficient code based on specifications."></textarea></li>
                                        <li><textarea type="text" id="taskb2" className="TaskText" placeholder="Testing and deploying programs and systems."></textarea></li>
                                        <li><textarea type="text" id="taskb3" className="TaskText" placeholder="Fixing and improving existing software."></textarea></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <input type="text" id="jobStart3" placeholder="08/2014 -" className="h6 date"></input>
                                    <input type="text" id="jobEnd3" placeholder="06/2016" className="h6 date"></input>
                                </div>
                                <div className="col-md-10">
                                <input type="text" id="jobTitle3" placeholder="Multimedia Intern" className="h4"></input>
                                <input type="text" id="jobDescription3" placeholder="Company C, San Diego, CA" className="h6"></input>
                                    <ul>
                                        <li><textarea type="text" id="taskc1" className="TaskText" placeholder="Posted on Social Media and handled account maintenance."></textarea></li>
                                        <li><textarea type="text" id="taskc2" className="TaskText" placeholder="Wrote Meta descriptions and tagging."></textarea></li>
                                        <li><textarea type="text" id="taskc3" className="TaskText" placeholder="Updated Website content and cleaned-up SEO."></textarea></li>
                                    </ul>
                                </div>
                            </div>
                            <h4 className="lines">Education</h4>
                            <div className="row">
                                <div className="col-md-2">
                                </div>
                                <div className="col-md-10">
                                <input type="text" id="degree" placeholder="Bachelor of Arts" className="h4"></input>
                                <input type="text" id="school" placeholder="University of San Diego - San Diego, CA" className="h6"></input>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                </section>

                {/* Page style is above */}
                <section>
                    <div className="row">
                        <div className="col-lg-1 mx-auto">
                            <Link to="/thankyou">
                                <button data-tip data-for="button1" className="btn btn-primary" onClick={() => {
                                    var formInput1 = document.getElementById("name").value;
                                    var formInput2 = document.getElementById("occupation").value;
                                    var formInput3 = document.getElementById("address").value;
                                    var formInput4 = document.getElementById("phoneNum").value;
                                    var formInput5 = document.getElementById("skillOne").value;
                                    var formInput6 = document.getElementById("skillTwo").value;
                                    var formInput7 = document.getElementById("skillThree").value;
                                    var formInput8 = document.getElementById("profile").value;
                                    var formInput9 = document.getElementById("jobStart1").value;
                                    var formInput10 = document.getElementById("jobEnd1").value;
                                    var formInput11 = document.getElementById("jobTitle1").value;
                                    var formInput12 = document.getElementById("jobDescription1").value;
                                    var formInput13 = document.getElementById("taska1").value;
                                    var formInput14 = document.getElementById("taska2").value;
                                    var formInput15 = document.getElementById("taska3").value;
                                    var formInput16 = document.getElementById("jobStart2").value;
                                    var formInput17 = document.getElementById("jobEnd2").value;
                                    var formInput18 = document.getElementById("jobTitle2").value;
                                    var formInput19 = document.getElementById("jobDescription1").value;
                                    var formInput20 = document.getElementById("taskb1").value;
                                    var formInput21 = document.getElementById("taskb2").value;
                                    var formInput22 = document.getElementById("taskb3").value;
                                    var formInput23 = document.getElementById("jobStart3").value;
                                    var formInput24 = document.getElementById("jobEnd3").value;
                                    var formInput25 = document.getElementById("jobTitle3").value;
                                    var formInput26 = document.getElementById("jobDescription3").value;
                                    var formInput27 = document.getElementById("taskc1").value;
                                    var formInput28 = document.getElementById("taskc2").value;
                                    var formInput29 = document.getElementById("taskc3").value;
                                    var formInput30 = document.getElementById("degree").value;
                                    var formInput31 = document.getElementById("school").value;
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
                                        formInput9,
                                        formInput10,
                                        formInput11,
                                        formInput12,
                                        formInput13,
                                        formInput14,
                                        formInput15,
                                        formInput16,
                                        formInput17,
                                        formInput18,
                                        formInput19,
                                        formInput20,
                                        formInput21,
                                        formInput22,
                                        formInput23,
                                        formInput24,
                                        formInput25,
                                        formInput26,
                                        formInput27,
                                        formInput28,
                                        formInput29,
                                        formInput30,
                                        formInput31
                                    )
                                }}>download</button>
                                <ReactTooltip id="button1" aria-haspopup="true"  >
                                    <p> this will export your file as a HTML file!</p>

                                </ReactTooltip>
                            </Link>
                        </div>
                    </div>
                </section>
            </div >
        )

    }
}


export default TemplateThree;