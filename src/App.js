import React from "react";
import "./styles/main.scss";

import Header from "./components/Header.js";
import Detail from "./components/Detail.js";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Detail /> */}
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
