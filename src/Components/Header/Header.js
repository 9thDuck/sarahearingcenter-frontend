import React, { useEffect } from "react";
import Navbar from "./Navbar";
import logo from "../../logo.png";
import { connect } from "react-redux";
import { setDesktopAction, setShowNavbarAction } from "../../redux/actions";
import { mapStateToProps } from "../../redux/store";

const Header = ({ dispatch, showNavbar }) => {
 useEffect(() => {
  dispatch(setShowNavbarAction(window.innerWidth > 949));
  dispatch(setDesktopAction(window.innerWidth > 949));
 }, []);

 useEffect(() => {
  const setShowNavbarEval = () => {
   if (window.innerWidth > 949) {
    dispatch(setDesktopAction(true));
   } else {
    dispatch(setDesktopAction(false));
   }

   if (window.innerWidth < 950 && showNavbar) {
    dispatch(setShowNavbarAction(false));
    return;
   } else if (window.innerWidth > 949 && !showNavbar) {
    dispatch(setShowNavbarAction(true));
    return;
   }
  };

  window.addEventListener("resize", setShowNavbarEval);

  return () => window.removeEventListener("resize", setShowNavbarEval);
 });

 return (
  <header className="header">
   <div className="headerContainer">
    <div className="mainLogoAndHeadingContainer">
     <div className="mainLogoContainer">
      <img src={logo} className="mainLogo" alt="Sara Hearing logo" />
     </div>
     <h1 className="mainHeading">Sara Hearing Center</h1>
    </div>
    <Navbar />
    <div className="navToggleBtnContainer">
     <button
      type="button"
      className={`navToggleBtn${showNavbar ? " navToggleBtnActive" : ""}`}
      onClick={() => dispatch(setShowNavbarAction(!showNavbar))}
     >
      <div></div>
      <div></div>
      <div></div>
     </button>
    </div>
   </div>
  </header>
 );
};

export default connect(mapStateToProps)(Header);
