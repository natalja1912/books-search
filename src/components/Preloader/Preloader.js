import React from "react";
import "./Preloader.css";

function Preloader({ text }) {
  return (
    <div className="preloader">
      <i className="circle-preloader"></i>
      {text && <p className="preloader__text">Идет поиск книг...</p>}
    </div>
  );
}

export default Preloader;
