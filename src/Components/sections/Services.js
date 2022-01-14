import React, { useState, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Services = () => {
 const [showHearingTestDesc, setShowHearingTestDesc] = useState(false);
 const [showABRDesc, setShowABRDesc] = useState(false);
 const [showServicingDesc, setShowServicingDesc] = useState(false);
 const [showMouldMakingDesc, setShowMouldMakingDesc] = useState(false);

 return (
  <section id="services" className="servicesSection">
   <div className="servicesInfoContainer">
    <h2>Services</h2>
    <p>
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
     facilis nobis ipsum minus quam, consequuntur fuga fugiat quia repellendus
     temporibus?
    </p>
    <article className="qAndAContainer">
     <div className="qContainer">
      <h3>Hearing Test</h3>
      <button
       className="serviceBtn"
       onClick={() => {
        setShowHearingTestDesc(!showHearingTestDesc);
        setShowABRDesc(false);
        setShowServicingDesc(false);
        setShowMouldMakingDesc(false);
       }}
      >
       {showHearingTestDesc ? <FaChevronUp /> : <FaChevronDown />}
      </button>
     </div>
     <p className={`${!showHearingTestDesc ? "hidden" : ""} `}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
      facilis nobis ipsum minus quam, consequuntur fuga fugiat quia repellendus
      temporibus?
     </p>
    </article>
    <article className="qAndAContainer">
     <div className="qContainer">
      <h3>Acoustic Brain Reasonance</h3>
      <button
       className="serviceBtn"
       onClick={() => {
        setShowHearingTestDesc(false);
        setShowABRDesc(!showABRDesc);
        setShowServicingDesc(false);
        setShowMouldMakingDesc(false);
       }}
      >
       {showABRDesc ? <FaChevronUp /> : <FaChevronDown />}
      </button>
     </div>
     <p className={`${!showABRDesc ? "hidden" : ""} `}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
      facilis nobis ipsum minus quam, consequuntur fuga fugiat quia repellendus
      temporibus?
     </p>
    </article>
    <article className="qAndAContainer">
     <div className="qContainer">
      <h3>Servicing</h3>
      <button
       className="serviceBtn"
       onClick={() => {
        setShowHearingTestDesc(false);
        setShowABRDesc(false);
        setShowServicingDesc(!showServicingDesc);
        setShowMouldMakingDesc(false);
       }}
      >
       {showServicingDesc ? <FaChevronUp /> : <FaChevronDown />}
      </button>
     </div>
     <p className={`${!showServicingDesc ? "hidden" : ""} `}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
      facilis nobis ipsum minus quam, consequuntur fuga fugiat quia repellendus
      temporibus?
     </p>
    </article>
    <article className="qAndAContainer">
     <div className="qContainer">
      <h3>Mould Making</h3>
      <button
       className="serviceBtn"
       onClick={() => {
        setShowHearingTestDesc(false);
        setShowABRDesc(false);
        setShowServicingDesc(false);
        setShowMouldMakingDesc(!showMouldMakingDesc);
       }}
      >
       {showMouldMakingDesc ? <FaChevronUp /> : <FaChevronDown />}
      </button>
     </div>
     <p className={`${!showMouldMakingDesc ? "hidden" : ""} `}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
      facilis nobis ipsum minus quam, consequuntur fuga fugiat quia repellendus
      temporibus?
     </p>
    </article>
   </div>
  </section>
 );
};

export default Services;
