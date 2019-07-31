import React from "react";
import { Link } from 'react-router-dom';

function Card() {
  return (
    <div class="card" style={{ width: 300, marginTop: 100, marginLeft: 100}}>
    {/* <img src="..." class="card-img-top" alt="..." /> */}
    <div className="card-body">
      <h5 className="card-title">Template One</h5>
      <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..</p>
      <Link to="/TemplateOne" className="btn btn-primary">Go to Template One</Link>
    </div>
  </div>
  );
}

export default Card;