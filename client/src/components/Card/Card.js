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
          <div class="card" style={{ width: 300, marginTop: 100, marginLeft: 60, padding: 20 }}>
            <img src="https://images.pexels.com/photos/2346344/pexels-photo-2346344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="card-img-top" alt="bird in tree" />
            <div className="card-body">
              <h5 className="card-title">Basic Birding</h5>
              <p className="card-text">This template is based on the homepage of our site, with a bird theme! Use this to create a beautiful looking webpage.</p>
              <Link to="/TemplateOne" className="btn btn-info" onClick={this.componentDidUpdate}>Go to Template One</Link>
            </div>
          </div>
          <div class="card" style={{ width: 300, marginTop: 100, marginLeft: 60, padding: 20 }}>
            <img src="https://i.imgur.com/oFrIb5d.jpg" class="card-img-top" alt="bird in tree" />
            <div className="card-body">
              <h5 className="card-title">Template two</h5>
              <p className="card-text">Change to template two.</p>
              <Link to="/TemplateTwo" className="btn btn-info" onClick={this.componentDidUpdate}>Digital Business Card</Link>
            </div>
          </div>
          <div class="card" style={{ width: 300, marginTop: 100, marginLeft: 60, padding: 20 }}>
            <img src="https://images.pexels.com/photos/2346344/pexels-photo-2346344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="card-img-top" alt="bird in tree" />
            <div className="card-body">
              <h5 className="card-title">Template three</h5>
              <p className="card-text">Change to template three.</p>
              <Link to="/TemplateThree" className="btn btn-info" onClick={this.componentDidUpdate}>Go to Template Three</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

  export default Card;