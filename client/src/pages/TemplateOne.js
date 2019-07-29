import React from 'react';
import './templateOne.css'

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
    form8value
) {
    var fileContent = "";
    fileContent += `<html lang="en">
    <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    </head>
    <body>

        <div>

            <header class="masthead text-center text-black">
                <div class="masthead-content">
                    <div class="container">
                        <h1 type="text" placeholder="Welcome to my Website!" class="form-control form-control-lg">${form1value}</h1>
                        <h2 class="masthead-subheading mb-0">${form2value}</h2>
                        <a href="google.com" class="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
                    </div>
                </div>
                <div class="bg-circle-1 bg-circle"></div>
                <div class="bg-circle-2 bg-circle"></div>
                <div class="bg-circle-3 bg-circle"></div>
                <div class="bg-circle-4 bg-circle"></div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            </header>

            <section>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 order-lg-2">
                            <div class="p-5">
                                <img class="img-fluid rounded-circle" src="img/01.jpg" alt="" />
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

            <section>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="p-5">
                                <img class="img-fluid rounded-circle" src="img/02.jpg" alt="" />
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
                                <img class="img-fluid rounded-circle" src="img/03.jpg" alt="" />
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

            <footer class="py-5 bg-black">
                <div class="container">
                    <p class="m-0 text-center text-white small">Copyright &copy; Your Website 2019</p>
                </div>

            </footer>
        </div>
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

function TemplateOne() {
  
    return (
        <html lang="en">
            <body>
                <div>
                    <header className="masthead text-center text-black">
                        <div className="masthead-content">
                            <div className="container">
                                <input type="text" id="h1Input" placeholder="Welcome to my Website!" className="form-control form-control-lg" />
                                <form>
                                    <input type="text" id="h2Input" placeholder="For those About to Rock" className="masthead-subheading mb-0 tagline"></input>
                                </form>
                                <a href="google.com" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
                            </div>
                        </div>
                        <div className="bg-circle-1 bg-circle"></div>
                        <div className="bg-circle-2 bg-circle"></div>
                        <div className="bg-circle-3 bg-circle"></div>
                        <div className="bg-circle-4 bg-circle"></div>
                    </header>

                    <section>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-lg-2">
                                    <div className="p-5">
                                        <img className="img-fluid rounded-circle" src="img/01.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <div className="p-5">
                                        <form>
                                            <input type="text" id="h3Input" placeholder="For those about to rock..." className="display-4"></input>
                                            <input type="text" align="top" id="h4Input" className="bodyText" placeholder="Lorem iinputsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."></input>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <img className="img-fluid rounded-circle" src="img/02.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <form>
                                            <input type="text" id="h5Input" placeholder="We Salute You" className="display-4"></input>
                                            <input type="text" id="h6Input" className="bodyText" placeholder="Lorem iinputsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."></input>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-lg-2">
                                    <div className="p-5">
                                        <img className="img-fluid rounded-circle" src="img/03.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <div className="p-5">
                                        <form>
                                            <input type="text" id="h7Input" placeholder="Let there Be Rock" className="display-4"></input>
                                            <input type="text" id="h8Input" className="bodyText" placeholder="Lorem iinputsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."></input>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="row">
                            <div className="col-lg-6"></div>
                            <div className="col-lg-1">
                                <button className="btn btn-primary" onClick={() => {
                                    var formInput1 = document.getElementById("h1Input").value;
                                    var formInput2 = document.getElementById("h2Input").value;
                                    var formInput3 = document.getElementById("h3Input").value;
                                    var formInput4 = document.getElementById("h4Input").value;
                                    var formInput5 = document.getElementById("h5Input").value;
                                    var formInput6 = document.getElementById("h6Input").value;
                                    var formInput7 = document.getElementById("h7Input").value;
                                    var formInput8 = document.getElementById("h8Input").value;
                                    download("index.html",
                                        formInput1,
                                        formInput2,
                                        formInput3,
                                        formInput4,
                                        formInput5,
                                        formInput6,
                                        formInput7,
                                        formInput8
                                    )
                                }}>download</button>
                            </div>
                            <div className="col-lg-5"></div>
                        </div>
                    </section>

                    <footer className="py-5 bg-black">
                        <div className="container">
                            <p className="m-0 text-center text-white small">Copyright &copy; Your Website 2019</p>
                        </div>

                    </footer>
                </div>
                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            </body>

        </html>
    )

}


export default TemplateOne;