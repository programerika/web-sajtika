import React from "react";
import AboutArch from "../components/AboutArch";
import Diagram from "../components/Diagram";
import ArchGallery from "../components/ArchGallery";

const arch = () => {
  return (
    <div className="w3-padding-large" id="main">
      {/* Arch Content */}
      <AboutArch/>
      <Diagram />
      <ArchGallery />
      {/* End Arch Content */}
    </div>
  );
};

export default arch;
