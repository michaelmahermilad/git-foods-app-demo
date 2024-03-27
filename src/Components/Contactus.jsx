import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook,
  faClock,
  faFax,
  faLocation,
  faLocationPin,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Map from "./Map";
 import "./Contactus.css";
import FormInquiry2 from "./FormInquiry2";
 import med from './Images/brand.png'
import MD3 from './/Images/brand.png'
 
function Contactus() {
  return (
    <div>
    
     
         
      

      <div className="MainCont07">
        <div className="secondCont07">
          <div className="interCont07">
          <img src={med} style={{ width:"100%", display:"block" , marginBottom:'2rem'}}/>

            <b >
              <p className="mycontactinfo">contact info : </p>
            </b>

            <div>
              <FontAwesomeIcon className="icn567" icon={faLocationPin} />
              <span>5 street Unknown city center  ,Cairo, Egy .</span>
            </div>
            <div>
              <FontAwesomeIcon className="icn567" style={{fontSize:'1.1rem'}} icon={faClock} />
              <span>Active hours: Mon - Fri 07:00 - 16:00 .</span>
            </div>
            <div>
              <FontAwesomeIcon className="icn567"   icon={faPhone} />
              <span>
                <a href="tel:+45 4545 55">Mobile : +556 84 303 .</a>
              </span>
            </div>
            <div>
              <FontAwesomeIcon className="icn567" style={{fontSize:'1.39rem'}} icon={faWhatsapp} />
              <span>Send Whatsapp message .</span>
            </div>
         
            <div>
              <FontAwesomeIcon className="icn567" style={{fontSize:'1.1rem'}} icon={faFax} />
              <span>  Fax: +444 3553 333</span>
            </div>


            <div>
              <FontAwesomeIcon className="icn567"   icon={faMailBulk} />
              <span>
                <a href="mailto:dddd@dddd.com">Email us ...</a>
              </span>{" "}
            </div>
            <img src={MD3} style={{width:"100%", display:"block" ,margin:"auto",marginTop:'2rem'}}/>


          </div>
          <div className="interCont207">
            <FormInquiry2/>

          </div>
        </div>
      </div>
  
      <div style={{marginBottom:"20rem"}}></div>
    </div>
  );
}

export default Contactus;