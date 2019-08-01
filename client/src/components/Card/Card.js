import React from "react";
import { Link } from 'react-router-dom';

function Card() {
  return (
    <div class="container">
      <div class="row">
        <div class="card" style={{ width: 300, marginTop: 100, marginLeft: 60, padding: 20 }}>
          <img src="https://images.pexels.com/photos/2346344/pexels-photo-2346344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="card-img-top" alt="bird in tree" />
          <div className="card-body">
            <h5 className="card-title">Basic Birding</h5>
            <p className="card-text">This template is based on the homepage of our site, with a bird theme! Use this to create a beautiful looking webpage.</p>
            <Link to="/TemplateOne" className="btn btn-primary">Go to Template One</Link>
          </div>
        </div>
        <div class="card" style={{ width: 300, marginTop: 100, marginLeft: 60, padding: 20 }}>
          <img src="https://images.pexels.com/photos/2346344/pexels-photo-2346344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="card-img-top" alt="bird in tree" />
          <div className="card-body">
            <h5 className="card-title">Template two</h5>
            <p className="card-text">Change to template two.</p>
            <Link to="/TemplateOne" className="btn btn-primary">Go to Template One</Link>
          </div>
        </div>
        <div class="card" style={{ width: 300, marginTop: 100, marginLeft: 60, padding: 20 }}>
          <img src="https://images.pexels.com/photos/2346344/pexels-photo-2346344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="card-img-top" alt="bird in tree" />
          <div className="card-body">
            <h5 className="card-title">Template three</h5>
            <p className="card-text">Change to template three.</p>
            <Link to="/TemplateOne" className="btn btn-primary">Go to Template One</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;