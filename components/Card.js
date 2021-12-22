import React from "react";
import Image from "next/image";

const Card = (props) => {
  var descriptionClass = "carousel-description";
  if(typeof props.description === 'undefined' || !props.description) {
    descriptionClass = "carousel-description-small";
  }

  return (
    // Card used in carousel slide shows
    <div className="w3-card-4 w3-container w3-border-red w3-margin-bottom w3-padding-16 w3-center carousel-card">
      <Image
        src={props.image}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className={`w3-image w3-hover-opacity ` + props.cardClass}
      />
      <div className={`w3-container w3-center ${descriptionClass}`}>
        <h5 className="w3-text-white">{props.title}</h5>
        <p className="">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
