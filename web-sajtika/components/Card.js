import React from "react";
import "w3-css/w3.css";
//import styles from "../public/myStyle.css";

const Card = (props) => {
  return (
    <div className="w3-card-4 container w3-border-red">
      <img src={props.image} alt="Alps" className="w3-image" />
      <div className="">
        <div className="text"></div>
      </div>
      <div className="w3-container w3-center">
        <p className="w3-text-white">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
