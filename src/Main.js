import React from "react";

import Header from "./components/Header.js";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function Main() {
  return (
    <div className="Main">
      <Header />
      <Hero />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Main;
