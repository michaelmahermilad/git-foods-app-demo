import React, { useEffect } from 'react'
import "./About.css"
import vd2 from "./Images/vd2.mp4"
function About2() {
   
  return (
    <div className='Aboutka' id="sub">
        <video src={vd2}  autoPlay loop muted width={"100%"}/>
        <div className='AboutDiv sub'>
         <h3 >

         ~ Subscribe ~
         </h3>
         <p>
          Let us update you with our newest products , services , Live sessions on Youtube Join us and be a memeber of our community.

         </p>
         <input className='email' placeholder='Please enter your e-mail'/>
<input type="submit" className='submit' />
        </div>

    </div>
  )
}

export default About2