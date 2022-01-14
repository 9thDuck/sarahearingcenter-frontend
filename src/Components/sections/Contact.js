import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

const Contact = ({ baseUrl }) => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [phone, setPhone] = useState("");
 const [description, setDescription] = useState("");
 const [response, setResponse] = useState(null);

 const submitContactQueryHandler = async (e) => {
  e.preventDefault();
  setResponse(null);
  if (name && phone && description) {
   const contactQuery = { name, email, phone, description };
   const output = await axios.post(baseUrl + "contact-us", { contactQuery });
   if (output) {
    console.log(output);
    setResponse(output.data.msg);
   } else {
    setResponse("Something went wrong, please try again");
   }
   setName("");
   setEmail("");
   setPhone("");
   setDescription("");
  }
 };

 useEffect(() => {
  const responseTimeout = setTimeout(() => setResponse(null), 2000);
  return () => clearTimeout(responseTimeout);
 }, [response]);

 return (
  <section id="contact" className="contactUs">
   <h2>Contact</h2>
   <form onSubmit={(e) => submitContactQueryHandler(e)}>
    <div className="formRow">
     <label htmlFor="name">Name</label>
     <input
      type="text"
      name="name"
      id="name"
      placeholder="Your Name"
      onChange={(e) => setName(e.target.value)}
      value={name}
      required
     />
    </div>
    <div className="formRow">
     <label htmlFor="email">Email</label>
     <input
      type="email"
      name="email"
      id="email"
      placeholder="Email(optional)"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
     />
    </div>
    <div className="formRow">
     <label htmlFor="phone">Phone</label>
     <input
      type="text"
      name="phone"
      id="phone"
      required
      placeholder="WhatsApp Preferred"
      onChange={(e) => setPhone(e.target.value)}
      value={phone}
     />
    </div>
    <div className="formRow textArea">
     <label htmlFor="description">Details</label>
     <textarea
      name="description"
      id="description"
      cols="30"
      rows="10"
      placeholder="Your query here"
      required
      onChange={(e) => setDescription(e.target.value)}
      value={description}
     ></textarea>
     <button className="submit">Submit</button>
    </div>
    {response && <p>{response}</p>}
   </form>
  </section>
 );
};
const mapStateToProps = (store) => store;

export default connect(mapStateToProps)(Contact);
