import React from 'react'
import "./Nav.css"
import logo1 from "../Images/logo1.png"
function index() {
  return (
    <div style={{height:"5rem"}}>
      <div className="cont">
     
<img src={logo1} style={{height:"4rem",float:"left",marginTop:".8rem"}}/>

        
        <div className="items"style={{height:"5rem",float:"right"}}>
        <a href="/" className="item">About</a>
        <a href="/" className="item">Services</a>
        <a href="/" className="item">Farms</a>
        <a href="/" className="item">Gallery</a>
        <a href="/" className="item">Contact us</a>
      
        </div>
      </div>

    </div>
  )
}

export default index