import React from "react";
import preloader from '../../assets/images/spinning-circles.svg';
import "./Preloader.madule.scss";

export const Preloader = () => {
  return (
    <div className="preloader">
      <img src={preloader} alt="preloader" />
    </div>
  );
};
