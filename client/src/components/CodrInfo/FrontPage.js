import React, {Component} from "react";
import logo from '../../pages/codr-logo.png';
import codejargon from "../../pages/codejargon.jpg";
import collab from "../../pages/collab.jpg";
import annoyed from "../../pages/annoyed.jpg";
import soheil from "../../pages/profilePics/soheil.png";

import { ScrollTo } from "react-scroll-to";

import API from '../../utils/API';

var container1 = {
  background: '#fff'
}
var container2 = {
  background: '#000'
}

var whiteText = {
  color: '#ffffff'
}

class FrontPage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       numUsers: 0
    }
 }
  componentDidMount() {
    API.getCount().then(data => {
      console.log(data);
      this.setState({numUsers: data.data.count});
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <section>
        <div className="container-fluid" style={container2}>
          <div className="row align-items-center">
            <div className="mx-auto">
              <h3 className="p-3" style={whiteText}>{this.state.numUsers} current Codr users!</h3>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={container1}>
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img className="img-fluid rounded-circle" src={codejargon} alt="Oakkar Aung" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">Why Use Us?</h2>
                <p>Im sure you have seen advertisements for a website that will give you a template for various web applications that you can edit and use.
                    The wonderful thing about Codr is while we offer a similar service, however ours will give you a comprehensive understanding of how it actually actually
                    works and what the code means that you are creating. We would love to give the full coding experience to people without the understanding
                    of how coding works.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={container2}>
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <img className="img-fluid rounded-circle" src={annoyed} alt="Michael Barachkov" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <h2 className="display-4" style={whiteText}>We Understand!</h2>
                <p style={whiteText}>Coding is very confusing! It quite literally is looking at a different language. We hope to give you
                the basic tools you need to start out with our template and gain a better clarity of this foreign language for future
                development.  </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img className="img-fluid rounded-circle" src={collab} alt="Soheil Behzad" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">Let Us Help You Learn!</h2>
                <p>We as coders constantly are learning. There is no one person that knows it all! Let us help you deshroud some of the 
                    confusion around this to give you a better step in the right direction to understanding it. The majority of a programmers
                    time is spent learning new material. We are not excluded from this group and we hope to give you a push in the right 
                    direction to join in on this wealth of knowledge.
                </p>
                <ScrollTo>
                {({ scrollTo }) => (
                  <button className="btn btn-info animateButton" onClick={() => scrollTo({ x: 20, y: 0, smooth: true })}>Back to top</button>
                )}
              </ScrollTo>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FrontPage;