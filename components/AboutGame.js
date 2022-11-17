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
          <div
            className="w3-half"
            style={{ position: "relative", paddingRight: "20px" }}
          >
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
              <Image src={gameBombika} alt="bomb" width="270" height="350" />
            </div>
          </div>
          <div className="w3-half">
            <p>
              We prepared these demo games, one is code guess game, based on
              bulls and cows game, developed in React.js with Redux. Second is
              mine sweeper game, developed in Vue.js with Vuex and Vuetify. They
              use Java Springboot with MongoDB backend service for managing
              scores. <br></br>
              <br></br>
              Both games provide basic instruction steps to make player
              experience easier learning how to play. Applications are optimized
              for desktop and mobile screens. Player can enter its username for
              saving scores. Saved username is valid for all games. Games will
              preserve scores and will show scoreboard. <br></br>
              <br></br>
              You can review demo projects source code organized into three git
              repositories for front end projects and back end project. GIT
              links are available in the footer.
              <br></br>
              <br></br>
            </p>
            <div className="w3-center">
              <Link href="/game" className="w3-center" passHref>
                <button className="w3-btn w3-ripple w3-teal w3-hover-aqua w3-round-xlarge w3-large w3-padding-large">
                  Play!
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
