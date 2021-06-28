import React from "react";
import AboutArch from "../components/AboutArch";
import Diagram from "../components/Diagram";
import ArchGallery from "../components/ArchGallery";

const arch = () => {
  return (
    <div className="w3-padding-large" id="main">
      <AboutArch></AboutArch>

      {/* TODO ADD Arch Diagram */}
      <Diagram />

      {/* TODO ADD Arch Gallery */}
      <ArchGallery />

      {/* TODO ADD Git Links */}
    </div>
  );
};

export default arch;
