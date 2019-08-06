import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Card extends Component {

  componentDidUpdate() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div style={{ height: "100vh" }}class="container">
        <div class="row">
          <div class="card" style={{ width: 300, marginTop: 100, marginLeft: 60, padding: 20, backgroundColor: "rgb(2,64,97,0.5)" }}>
            <img src="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="card-img-top" alt="CityScape" />
            <div className="card-body">
              <h5 className="card-title">Basic Business</h5>
              <p className="card-text">This template is based on the homepage of our site, with a business theme! Use this to create a beautiful looking webpage.</p>
              <Link to="/TemplateOne" className="btn btn-info" onClick={this.componentDidUpdate}>Use Basic Business</Link>
            </div>
          </div>
          <div class="card" style={{ width: 300, marginTop: 100, marginLeft: 60, padding: 20, backgroundColor: "rgb(2,64,97,0.5)" }}>
            <img src="https://i.imgur.com/oFrIb5d.jpg" class="card-img-top" alt="Palm Trees" />
            <div className="card-body">
              <h5 className="card-title">Digital Business Card</h5>
              <p className="card-text">This template is for a digital business card. A quick glance at this page will share your Contact Information and a little bit about yourself. </p>
              <Link to="/TemplateTwo" className="btn btn-info" onClick={this.componentDidUpdate}>Use Digital Business Card</Link>
            </div>
          </div>
          <div class="card" style={{ width: 300, marginTop: 100, marginLeft: 60, padding: 20, backgroundColor: "rgb(2,64,97,0.5)" }}>
            <img src="https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="card-img-top" alt="Hand Shake"/>
            <div className="card-body">
              <h5 className="card-title">Resume</h5>
              <p className="card-text">This template is for a resume page. Use this template to create a nice looking Resume to impress your potential employers.</p>
              <Link to="/TemplateThree" className="btn btn-info" onClick={this.componentDidUpdate}>Use Resume</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

  export default Card;