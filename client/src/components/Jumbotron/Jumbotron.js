import React from "react";
import Background from '../../pages/images/darkComp.jpg';

var sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  clear: "both", 
  paddingTop: 100, 
  textAlign: "center"
};

function Jumbotron({ children }) {
  return (
    <div style={ sectionStyle } className="jumbotron">
      {children}
    </div>
  );
}

export default Jumbotron;