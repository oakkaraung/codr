import React from "react";
import Background from '../../pages/images/darkComp.jpg';

var sectionStyle = {
<<<<<<< HEAD
  width: "100vw",
=======
  width: "100%",
>>>>>>> fba5830a929621e922df74266f7e2725cb31c354
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