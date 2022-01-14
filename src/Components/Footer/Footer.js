import React from "react";
import NavUl from "../Header/NavUl";
import {
 FaFacebookSquare,
 FaInstagramSquare,
 FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
 return (
  <footer>
   <div className="copyright">
    <h3>&#169; 2022 Sara Hearing Center</h3>
    <p>All rights reserved.</p>
   </div>

   <div className="correspondence">
    <div className="socialMedia">
     <h5>follow us</h5>
     <ul>
      <li>
       <a href="#">
        <FaFacebookSquare />
       </a>
      </li>
      <li>
       <a href="#">
        <FaTwitterSquare />
       </a>
      </li>
      <li>
       <a href="#">
        <FaInstagramSquare />
       </a>
      </li>
     </ul>
    </div>
    <div className="contactUsFooter">
     <p>info@sarahearingcenter.com</p>
     <p>+218 - 123456789</p>
    </div>
   </div>
   <nav>
    <NavUl />
   </nav>
  </footer>
 );
};

export default Footer;
