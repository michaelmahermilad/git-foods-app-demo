import {
    faScreenpal,
    faSquareFacebook,
    faSquareInstagram,
    faSquareTwitter,
    faSquareYoutube,
    faWhatsapp,
  } from "@fortawesome/free-brands-svg-icons";
  import img from "./Images/logo.png"
  import {
    faEnvelope,
    faMailForward,
    faMobilePhone,
    faPhone,
    faTv,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React from "react";
  import "./Footer.css";
  
  
  function Footer() {
    return (
      <footer className="Myfooter">
        <div className="row29 primary29">
          <div className="column29 about29">
            <img className="h329" src={img}/>
             <p >
             Kail Agro For Import & Export Group was incorporated in the Egyptian market since 2023

</p>
            <div className="social229">
              <div>
                <FontAwesomeIcon icon={faEnvelope} /> <span> Email </span>
                <p>mm@gmail.com</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faWhatsapp} />
                <span> Whatsapp </span>
                <p  >+323 4554 7676</p>
              </div>
            </div>
          </div>
          <div className="column29 links29">
            <h3 className="h329">
              {" "}
              <FontAwesomeIcon icon={faTv} /> AGRO
            </h3>
            <ul className="ul29">
              <li>
                <a href="#cookies-policy">Services</a>
              </li>
              <li>
                <a href="#terms-of-services">Farms</a>
              </li>
              <li>
                <a href="#support">Cycles of Hope </a>
              </li>
              <li>
                <a href="#support">How to help your near patient. </a>
              </li>
            </ul>
          </div>
  
          <div className="column29 links29">
            <h3 className="h329">Info</h3>
            <ul className="ul29">
              <li>
                <a href="#faq">F.A.Q</a>
              </li>
              <li>
                <a href="#cookies-policy">Cookies Policy</a>
              </li>
              <li>
                <a href="#terms-of-services">Terms Of Service</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>
  
          <div className="column29 subscribe29">
            <h3 className="h329">Get Our News .</h3>
            <div>
              <input
                className="input29"
                type="email"
                placeholder="Your email id here"
              />
              <button className="button29">Subscribe</button>
            </div>
            <div className="social29">
              <FontAwesomeIcon  icon={faSquareFacebook} />
              <FontAwesomeIcon icon={faSquareYoutube} />
              <FontAwesomeIcon icon={faSquareTwitter} />
              <FontAwesomeIcon icon={faSquareInstagram} />
            </div>
          </div>
        </div>
  
        <div className=" copyright29">
       
          <p className="">Copyright &copy; 2022 Mic</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;