import React from "react";
import Card from "./Card";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const ArchGallery = () => {

  const width = 600;
  const height = 550;

  return (
    <div>
      {/*Arch Gallery Section */}
      <div className="w3-content w3-justify w3-text-grey" id="game">
        <h2 className="w3-text-light-grey w3-center">Gallery</h2>
        <hr style={{ width: "100%" }} className="w3-opacity" />

        {/* TODO Add Gallery here */}

        <div className="slide-container w3-center">
          <Slide 
            autoplay={Infinity} 
            canSwipe 
          >
              <Card
                image="/img/rbpi4-setup.jpg"
                description="Rapsberry Pi 4 setup"
                alt="Rapsberry Pi 4 setup"
                width={width}
                height={height}
              ></Card>
              <Card
                image="/img/rbpi4-setup-1.jpg"
                description="Rapsberry Pi 4 another setup"
                alt="Rapsberry Pi 4 another setup"
                width={width}
                height={height}
              ></Card>
              <Card
                image="/img/rbpi4-cooler-set.jpg"
                description="Rapsberry Pi 4 cooler set"
                alt="Rapsberry Pi 4 cooler set"
                width={width}
                height={height}
              ></Card>
              <Card
                image="/img/rbpi4-coolers.jpg"
                description="Rapsberry Pi 4 coolers"
                alt="Rapsberry Pi 4 coolers"
                width={width}
                height={height}
              ></Card>
              <Card
                image="/img/rbpi4-hdmi.jpg"
                description="Rapsberry Pi 4 HDMI cable"
                alt="Rapsberry Pi 4 HDMI cable"
                width={width}
                height={height}
              ></Card>
              <Card
                image="/img/rbpi4-card.jpg"
                description="Rapsberry Pi 4 memory card"
                alt="Rapsberry Pi 4 memory card"
                width={width}
                height={height}
              ></Card>
              <Card
                image="/img/rbpi4-acrylic-transparent-layer.jpg"
                description="Rapsberry Pi 4 acrylic transparent layer"
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
