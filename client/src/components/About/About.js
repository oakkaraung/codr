import React, {Component} from "react";
import logo from '../../pages/codr-logo.png';
import mike from "../../pages/profilePics/mike.JPG";
import trevor from "../../pages/profilePics/trevor.jpg";
import oakkar from "../../pages/profilePics/oakkar.jpg";
import soheil from "../../pages/profilePics/soheil.png";
import { Link } from 'react-router-dom';

import { ScrollTo } from "react-scroll-to";

import API from '../../utils/API';

var container1 = {
  background: '#6fc9be'
}
var container2 = {
  background: '#024061'
}

var whiteText = {
  color: '#ffffff'
}

class About extends Component {
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
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img className="img-fluid" src={logo} alt="Codr" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">What is Codr?</h2>
                <p>Codr is a free web application that provides its users with templates that they can simply click on and modify many aspects of. Once users finish editing a template, they are given the option to download an HTML file which will display the website that the users were editing earlier. This file may then be personally used by the user linked to a domain as their own website.</p>
                <Link to="/profile" class="navbar-brand">Check out the templates!</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={container1}>
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <img className="img-fluid rounded-circle" src={oakkar} alt="Oakkar Aung" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <h2 className="display-4">Oakkar Aung</h2>
                <p>Oakkar is a current second year data science student studying at the University of California San Diego. He has had prior computer science experience through his high school's AP Computer Science program and wishes to tranfer to a joint Mathematics Computer Science major. His goal is to be the most versatile coder as he can be.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={container2}>
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img className="img-fluid rounded-circle" src={mike} alt="Michael Barachkov" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4" style={whiteText}>Michael Barachkov</h2>
                <p style={whiteText}>Michael is currently a web development student in the University of California San Diego's Full Stack Coding Bootcamp. For the past decade, he have been doing freelance graphic art and working on sportfishing boats until a recent decision to change career paths. He hope to absorb as much knowledge as he can and grow as a developer each day.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <img className="img-fluid rounded-circle" src={soheil} alt="Soheil Behzad" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <h2 className="display-4">Soheil Behzad</h2>
                <p>Being a creative mind, Soheil saw an opportunity to incorporate that with the knowledge gained by attending UCSD Full Stack Coding Bootcamp and also an Associates degree from ITT Technical Institute as resources to his advantage to become more knowledgeable in the field of computer science.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={container1}>
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img className="img-fluid rounded-circle" src={trevor} alt="Trevor Fairbank" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">Trevor Fairbank</h2>
                <p>Trevor can be described as a creative mind. He enjoys long walks on the beach, video games, and coding. But he is usually behind a computer or another black mirror so he doesn’t make it to the beach very often. He enjoys being close to a body of water.  Trevor grew up in Lake Tahoe and moved to San Diego to attend San Diego State University. After graduating, he worked for two years as a freelance photographer. From there, he began to learn how to code. He is currently looking for a job as a programmer.</p>
              <ScrollTo>
                {({ scrollTo }) => (
                  <button className="btn btn-info animateButton" onClick={() => scrollTo({ x: 20, y: 0, smooth: true })}>Top</button>
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

export default About;