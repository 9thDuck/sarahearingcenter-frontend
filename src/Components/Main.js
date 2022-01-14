import React, { useState } from "react";
import Carousel from "./sections/Carousel/Carousel";
import Products from "./sections/Products/Products";
import Contact from "./sections/Contact";
import Services from "./sections/Services";
import Footer from "./Footer/Footer";

const Main = () => {
 const [showCarousel, setShowCarousel] = useState(true);

 if (showCarousel) {
  return (
   <main>
    <Carousel />
    <Products />
    <Services />
    <Contact />
    <Footer />
   </main>
  );
 }
};

export default Main;
