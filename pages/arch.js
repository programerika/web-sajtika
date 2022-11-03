import React from "react";
import AboutArch from "../components/AboutArch";
import Diagram from "../components/Diagram";

const arch = () => {
  return (
    <div className="w3-padding-large" id="main">
      {/* Arch Content */}
      <AboutArch/>
      <Diagram />
      {/* End Arch Content */}
    </div>
  );
};

export default arch;
