import React from "react";
import Image from "next/image";

const Diagram = () => {
  return (
    <div>
      {/*Arch Diagram Section */}
      <div
        className="w3-content w3-justify w3-text-grey w3-padding-16"
        id="game"
      >
        <h2 className="w3-text-light-grey w3-center">Diagram</h2>
        <hr className="w3-opacity w3-width-100" />

        <div className="w3-center w3-padding ">
          <Image
            src="/img/kubernetes-cluster-diagram.png"
            alt="kubernetes-diagram-logo"
            width="742"
            height="551"
            priority
          />
        </div>
        {/* End Arch Diagram Section */}
      </div>
    </div>
  );
};

export default Diagram;
