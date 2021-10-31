import React from "react";
import dynamic from "next/dynamic";

const WebGejmika = dynamic(
  () => {
    return import("web-gejmika-front-test10");
  },
  { ssr: false }
);

const game = () => {
  return (
    <div className="w3-padding-large" id="main">
      <div
        className="w3-content w3-justify w3-text-grey w3-padding-16"
        id="game"
      >
      <h2 className="w3-text-light-grey w3-center">Demo game</h2>
      <hr className="w3-opacity w3-width-100" />
      <WebGejmika/>
      </div>
    </div>
  );
};

export default game;
