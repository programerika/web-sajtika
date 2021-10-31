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
    <div className="w3-padding-large w3-center" id="main">
      <WebGejmika/>
    </div>
  );
};

export default game;
