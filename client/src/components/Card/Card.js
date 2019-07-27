import React from "react";

function Card() {
  return (
    <div class="card" style={{ width: 300, marginTop: 100, marginLeft: 100}}>
    {/* <img src="..." class="card-img-top" alt="..." /> */}
    <div class="card-body">
      <h5 class="card-title">Template One</h5>
      <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..</p>
      <a href="./TemplateOne" class="btn btn-primary">Go to Template One</a>
    </div>
  </div>
  );
}

export default Card;