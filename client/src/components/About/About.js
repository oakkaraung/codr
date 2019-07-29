import React from "react";
import logo from '../../pages/codr-logo.png'

function About() {
  return (
    <section>
   <div class="container">
     <div class="row align-items-center">
       <div class="col-lg-6 order-lg-2">
         <div class="p-5">
           <img class="img-fluid rounded-circle" src={logo} alt="" />
         </div>
       </div>
       <div class="col-lg-6 order-lg-1">
         <div class="p-5">
           <h2 class="display-4">Welcome to Codr!</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
         </div>
       </div>
     </div>
   </div>
 </section>
  );
}

export default About;