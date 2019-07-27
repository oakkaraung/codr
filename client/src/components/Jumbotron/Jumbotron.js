import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ backgroundColor: "lightblue", height: 660, clear: "both", paddingTop: 100, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;