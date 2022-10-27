import React from "react";
import Link from "next/link";
import Image from "next/image";
import gameInProg from "../public/img/GameInProgress.png";
import gameBombika from "../public/img/gameBombika.png";

const AboutGame = () => {
  return (
    <div>
      {/* About Game Section */}
      <div
        className="w3-content w3-justify w3-text-grey w3-padding-16"
        id="demo"
      >
        <h2 className="w3-text-light-grey w3-center">Demo projects</h2>
        <hr className="w3-opacity w3-width-100" />
        <div className="w3-responsive">
          <div className="w3-half" style={{ position: "relative" }}>
            <Image src={gameInProg} alt="me" width="300" height="500" />
            <div
              style={{
                position: "absolute",
                top: "150px",
                right: "20px",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <Image src={gameBombika} alt="bomb" width="300" height="350" />
            </div>
          </div>
          <div className="w3-half">
            <p>
              This is code guess game, based on bulls and cows game. It is
              developed in React.js with Redux in front end and Java Springboot
              with MongoDB in backend for managing scores. <br></br>
              <br></br>
              Game provides basic instruction steps to make player experience
              easier learning how to play. It is optimized for desktop and
              mobile screens. Player can enter its username for saving scores.
              Game will preserve scores and will show scoreboard. <br></br>
              <br></br>
              You can review game source code organized into two git
              repositories for front end project and back end project. GIT links
              are available in the footer.
              <br></br>
              <br></br>
            </p>
            <div className="w3-center">
              <Link href="/game" className="w3-center">
                <button className="w3-btn w3-ripple w3-teal w3-hover-aqua w3-round-xlarge w3-large w3-padding-large">
                  <a> Play!</a>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* End About Game Section */}
      </div>
    </div>
  );
};
export default AboutGame;
