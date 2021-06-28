import React from "react";
import Card from "./Card";
import { useState } from "react";
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const ArchGallery = () => {

  // const [autoplay, setAutoplay] = useState(true);

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
              ></Card>
              <Card
                image="/img/rbpi4-setup-1.jpg"
                description="Rapsberry Pi 4 setup"
              ></Card>
              <Card
                image="/img/rbpi4-cooler-set.jpg"
                description="Rapsberry Pi 4 cooler set"
              ></Card>
              <Card
                image="/img/rbpi4-coolers.jpg"
                description="Rapsberry Pi 4 coolers"
              ></Card>
              <Card
                image="/img/rbpi4-hdmi.jpg"
                description="Rapsberry Pi 4 HDMI cable"
              ></Card>
              <Card
                image="/img/rbpi4-card.jpg"
                description="Rapsberry Pi 4 memory card"
              ></Card>
              <Card
                image="/img/rbpi4-acrylic-transparent-layer.jpg"
                description="Rapsberry Pi 4 acrylic transparent layer"
              ></Card>
          </Slide>
        </div>
        {/* End Arch Gallery Section */}
      </div>
    </div>
  );
};

export default ArchGallery;
