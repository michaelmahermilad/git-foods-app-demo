import React, { useEffect } from 'react'
import "./About.css"
import vd1 from "./Images/vd1.mp4"
function About() {
   
  return (
    <div className='Aboutka'>
        <video src={vd1}  autoPlay loop muted width={"100%"}/>
        <div className='AboutDiv'>
         <h3>

         ~ About us ~
         </h3>
         <p>
          Kail Agro For Import & Export Group was incorporated in the Egyptian market since 2023. Its main industry is food, refrigerators administration, export, import, local distribution, and integrated logistic services in compliance with the quality requirements and controls applied the international companies with a keen interest in providing the international market needs of agricultural crops of high quality fruits and vegetables.

         </p>
        </div>

    </div>
  )
}

export default About