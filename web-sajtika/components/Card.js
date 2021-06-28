import React from "react";
import "w3-css/w3.css";
import Image from "next/image";

const Card = (props) => {
  return (
    // Card used in carousel slide shows
    <div className="w3-card-4 w3-container w3-border-red w3-margin-bottom w3-padding-16 w3-center">
      <Image
        src={props.image}
        alt={props.alt}
        width="250"
        height="250"
        className="w3-image w3-circle w3-hover-opacity"
      />
      <div className="w3-container w3-center">
        <p className="w3-text-white">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
