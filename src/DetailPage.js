import React from "react";
import "./styles/main.scss";

import Header from "./components/Header.js";
import Detail from "./components/Detail.js";
import Footer from "./components/Footer";

function DetailPage() {
  return (
    <div className="detail">
      <Header />
      <Detail /> 
      <Footer />
    </div>
  );
}

export default DetailPage;
