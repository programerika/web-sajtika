import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutGame = () => {
  return (
    <div>
      {/* About Game Section */}
      <div
        className="w3-content w3-justify w3-text-grey w3-padding-32"
        id="game"
      >
        <h2 className="w3-text-light-grey w3-center">Game</h2>
        <hr style={{ width: "100%" }} className="w3-opacity" />
        {/* Game image goes here*/}
        {/*<div className="w3-center w3-padding">
                    <Image
                        src="/img/raspberry-pi-logo.jpg"
                        alt="me"
                        width="400"
                        height="160"
                    />
                </div>*/}
        <p>
          This is code guess game, based on bulls and cows game. It is developed
          in React.js + Next.js in front end and Java Spring boot with MongoDB
          in backend for managing scores. <br></br>
          <br></br>
          Game provides basic instruction steps to make player experience easier
          learning how to play. It is optimized for desktop and mobile screens.
          Player can enter its username for saving scores. Game will preserve
          scores and will show scoreboard. <br></br>
          <br></br>
          On following GIT links you can review game source code organized into
          two git repositories for front end project and back end project.
          <Link href="/game">
            <a> Play!</a>
          </Link>
          <br />
          {/*TODO - add links to github game repositories*/}
        </p>
        {/* End About Game Section */}
      </div>
    </div>
  );
};
export default AboutGame;
