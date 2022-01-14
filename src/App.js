import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main";
import { IconContext } from "react-icons";

function App() {
 return (
  <>
   <IconContext.Provider value={{ color: "#d81e5b" }}>
    <Header />
    <Main />
   </IconContext.Provider>
  </>
 );
}

export default App;
