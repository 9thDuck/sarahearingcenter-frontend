import React from "react";
import { connect } from "react-redux";
import NavUl from "./NavUl";
const Navbar = ({ showNavbar, desktop }) => (
 <nav
  className={`${
   !showNavbar ? "hidden" : showNavbar && !desktop ? "navbarMobile" : "navbar"
  }`}
 >
  <NavUl />
 </nav>
);

const mapStateToProps = (store) => store;

export default connect(mapStateToProps)(Navbar);
