import React from "react";
import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <i className="circle-preloader"></i>
      <p className="preloader__text">Идет поиск книг...</p>
    </div>
  );
}

export default Preloader;