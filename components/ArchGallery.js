import React from "react";
import Card from "./Card";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ArchGallery = () => {
  const width = 700;
  const height = 500;

  return (
    <div>
      {/*Arch Gallery Section */}
      <div className="w3-content w3-justify w3-text-grey arch-gallery w3-padding-16">
        <h2 className="w3-text-light-grey w3-center">Gallery</h2>
        <hr className="w3-opacity w3-width-100" />

        {/* TODO Add Gallery here */}

        <div className="slide-container w3-center w3-panel">
          <Slide autoplay={true} canSwipe>
            <Card
              image="/img/Arch-1-2M.jpg"
              alt="Raspberry Pi 4 cluster"
              width={width}
              height={height}
            ></Card>
            <Card
              image="/img/Arch-2-2M.jpg"
              alt="Raspberry Pi 4 cluster"
              width={width}
              height={height}
            ></Card>
            <Card
              image="/img/Arch-3-2M.jpg"
              alt="Raspberry Pi 4 cluster"
              width={width}
              height={height}
            ></Card>
            <Card
              image="/img/kubectl.png"
              alt="Raspberry Pi 4 cluster"
              width={width}
              height={height}
            ></Card>
          </Slide>
        </div>
        {/* End Arch Gallery Section */}
      </div>
    </div>
  );
};

export default ArchGallery;
