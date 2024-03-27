import React from 'react'
import './Card.css'
import x from "./Images/brand.png"
import { GiGreenhouse } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";
import { PiTreeEvergreenLight } from "react-icons/pi";

function Cards() {
  return (
    <div>
                <h5 className="headersmall">
          {" "}
          For many advantages and standards compliance making us stand out , Our clients are putting their trust in us.

</h5>
        <div className="CARDS">
          <div class="cards">
          <article class="card">
              <a href="/">
                <figure class="card-thumb">
                <GiGreenhouse className='ICON' />
                </figure>
                <div class="card-content">
                  <h2 class="card-title">Harvest</h2>
                  <p class="card-excerpt">
                  
Harvest using modern methods according to International Terms and Quality Standards.
                  </p>
                </div>
              </a>
            </article>
            <article class="card">
              <a href="/">
                <figure class="card-thumb">
                <LuLeafyGreen   className='ICON'/>

                </figure>
                <div class="card-content">
                  <h2 class="card-title">  Packing and Transport</h2>
                  <p class="card-excerpt">
                
Hygiene and Safety packing and Transportation as per set procedures and conditions of International Quality and Hygiene Standards.
                  </p>
                </div>
              </a>
            </article>
            <article class="card">
              <a href="/">
                <figure class="card-thumb">
                <PiTreeEvergreenLight  className='ICON' />
                </figure>
                <div class="card-content">
                  <h2 class="card-title">    Growing plants</h2>
                  <p class="card-excerpt">
 Our goal is Planting as per client’s needs to meet all orders and demands
                  </p>
                </div>
              </a>
            </article>
           
          </div>
        </div>
      


    </div>
  )
}

export default Cards