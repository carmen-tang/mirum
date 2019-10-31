import React from "react";

import Header from "./components/Header.js";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

import SlideInfo from "./components/SlideInfo";

function Main() {
  return (
    <div className="Main">
      <Header />
      <Hero />
      <Carousel heading="Example Slider" slides={SlideInfo} />
      <Footer />
    </div>
  );
}

export default Main;
