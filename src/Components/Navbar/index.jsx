import React from 'react'
import "./Nav.css"
import { HiBars3BottomRight } from "react-icons/hi2";
import logo1 from "../Images/logo1.png"
function index() {
  return (
    <>
  <div style={{height:'5rem'}}>

  </div>
      <div className=" staticNav">
     
<img src={logo1} style={{height:"4rem",float:"left",marginTop:".8rem", marginInline:"1rem"}}/>

        
        <div className="items"style={{ float:"right"  }}>
    
        <a href="/" className="item">About</a>
      
        <a href="/contact" className="item">Contact us</a>
        <a href="#sub" className="item Subscribe">Subscribe</a>
        
        </div>
        <HiBars3BottomRight   className="hide" onClick={()=>{
           console.log(document.getElementsByClassName("items")[0])
          document.getElementsByClassName("items")[0].classList.toggle("close")
        }} style={{zIndex:"9999999" , background:"white"}}/>

      </div>

</>
  )
}

export default index