import React from "react";
import "w3-css/w3.css";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className="w3-card-4 container w3-border-red w3-margin-bottom w3-padding-bottom">
      <Image
        src={props.image}
        alt="me"
        width="650"
        height="650"
        className="w3-image"
      />
      {/* <img src={props.image} alt="Alps" className="w3-image" /> */}
      <div className="w3-container w3-center">
        <p className="w3-text-white">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
