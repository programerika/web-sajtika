import React from "react";
import Card from "./Card";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ArchGallery = () => {
  const width = 500;
  const height = 450;

  return (
    <div>
      {/*Arch Gallery Section */}
      <div className="w3-content w3-justify w3-text-grey arch-gallery w3-padding-16">
        <h2 className="w3-text-light-grey w3-center">Gallery</h2>
        <hr className="w3-opacity w3-width-100" />

        {/* TODO Add Gallery here */}

        <div className="slide-container w3-center w3-panel">
          <Slide autoplay={Infinity} canSwipe>
            <Card
              image="/img/rbpi4-setup.jpg"
              title="Rapsberry Pi 4 setup"
              alt="Rapsberry Pi 4 setup"
              width={width}
              height={height}
            ></Card>
            <Card
              image="/img/rbpi4-setup-1.jpg"
              title="Rapsberry Pi 4 another setup"
              alt="Rapsberry Pi 4 another setup"
              width={width}
              height={height}
            ></Card>
            <Card
              image="/img/rbpi4-cooler-set.jpg"
              title="Rapsberry Pi 4 cooler set"
              alt="Rapsberry Pi 4 cooler set"
              width={width}
              height={height}
            ></Card>
            <Card
              image="/img/rbpi4-coolers.jpg"
              title="Rapsberry Pi 4 coolers"
              alt="Rapsberry Pi 4 coolers"
              width={width}
              height={height}
            ></Card>
            <Card
              image="/img/rbpi4-hdmi.jpg"
              title="Rapsberry Pi 4 HDMI cable"
              alt="Rapsberry Pi 4 HDMI cable"
              width={width}
              height={height}
            ></Card>
            <Card
              image="/img/rbpi4-card.jpg"
              title="Rapsberry Pi 4 memory card"
              alt="Rapsberry Pi 4 memory card"
              width={width}
              height={height}
            ></Card>
            <Card
              image="/img/rbpi4-acrylic-transparent-layer.jpg"
              title="Rapsberry Pi 4 acrylic transparent layer"
              alt="Rapsberry Pi 4 acrylic transparent layer"
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
