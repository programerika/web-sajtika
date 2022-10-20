// import React from "react";
import dynamic from "next/dynamic";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import TabPanel from "@mui/material";
// import Typography from "@mui/material/Typography";
import WebBombika from "../components/WebBombika";

const WebGejmika = dynamic(
  () => {
    return import("web-gejmika-front");
  },
  { ssr: false }
);

const game = () => {
  const [selectedTab, setSelectedTab] = React.useState("0");

  const toggleTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // createBombika("gameBombika");

  return (
    // <Box sx={{ width: "100%", bgcolor: "black" }}>
    <>
      <Tabs value={selectedTab} onChange={toggleTab} centered>
        <Tab label="Gejmika" sx={{ color: "white" }} />
        <Tab label="Bombika" sx={{ color: "white" }} />
      </Tabs>
      {selectedTab === 0 && (
        <div className="w3-padding-16">
          <WebGejmika />
        </div>
      )}
      {selectedTab === 1 && (
        <div>
          <WebBombika />
        </div>
      )}
    </>

    // <div className="w3-padding-large" id="main">
    //   {/* Game Content */}
    //   <div
    //     className="w3-content w3-justify w3-text-grey w3-padding-16"
    //     id="game"
    //   >
    //     <h2 className="w3-text-light-grey w3-center">Demo game</h2>
    //     <hr className="w3-opacity w3-width-100" />
    //     <div className="w3-padding-16">
    //       <WebGejmika />
    //     </div>
    //   </div>
    //   {/*End Game Content */}
    // </div>
  );
};

export default game;
