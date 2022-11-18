// import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import WebBombika from "../components/WebBombika";

const WebGejmika = dynamic(
  () => {
    return import("web-gejmika-front");
  },
  { ssr: false }
);

const Game = () => {
  const [selectedGame, setSelectedGame] = useState(0);

  return (
    <div className="w3-padding-large" id="main">
      <div className="w3-row w3-content w3-justify w3-padding-16" id="game">
        <div className="w3-bar w3-black w3-center w3-padding">
          <button
            className={
              "tab-hover w3-padding tab-style " +
              (selectedGame === 0 ? "selected-tab" : "non-selected-tab")
            }
            onClick={() => setSelectedGame(0)}
          >
            REACT.JS
          </button>
          <button
            className={
              "tab-hover w3-padding tab-style " +
              (selectedGame === 1 ? "selected-tab" : "non-selected-tab")
            }
            onClick={() => setSelectedGame(1)}
          >
            VUE.JS
          </button>
        </div>

        {selectedGame === 0 && (
          <div className="w3-padding-16 w3-margin-top">
            <WebGejmika />
          </div>
        )}

        {selectedGame === 1 && (
          <div className="w3-padding-16 w3-margin-top">
            <WebBombika />
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
