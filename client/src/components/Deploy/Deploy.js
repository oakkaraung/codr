import React from "react";


function Deploy() {
    return (
        <section>

            <div classNameName="container">
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <div className="p-5">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive embed-responsive-16by9" src="https://www.youtube.com/watch?v=BT81GmLdeHc" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="p-5">
                            <h2 className="display-4">Steps To Deploy Your New Web Page!</h2><br></br><br></br>

                            <p>You can host and share your HTML, Javascript and CSS files on Google Drive. you can achive this by following the steps below:</p><br></br>
                            <ol>
                                <li>Create a folder in Google Drive and set the sharing permission to “Public on the Web.</li>
                                <li>Upload the HTML, JavaScript and CSS files for your web page to the new folder.</li>
                                <li>Select the HTML file, open it and click the “Preview” button in the toolbar.</li>
                                <li>Share the URL (it will look like www.googledrive.com/host/…) and anyone can view your web page!</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Deploy;