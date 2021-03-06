import React from "react";
import dynamic from "next/dynamic";

const WebGejmika = dynamic(
  () => {
    return import("web-gejmika-front");
  },
  { ssr: false }
);

const game = () => {
  return (
    <div className="w3-padding-large" id="main">
      {/* Game Content */}
      <div
        className="w3-content w3-justify w3-text-grey w3-padding-16"
        id="game"
      >
        <h2 className="w3-text-light-grey w3-center">Demo game</h2>
        <hr className="w3-opacity w3-width-100" />
        <div className="w3-padding-16">
          <WebGejmika />
        </div>
      </div>
      {/*End Game Content */}
    </div>
  );
};

export default game;
