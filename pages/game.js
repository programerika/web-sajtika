// import React from "react";
import dynamic from "next/dynamic";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import TabPanel from "@mui/material";
// import Typography from "@mui/material/Typography";
import WebBombika from "../components/WebBombika";
import styled from "@emotion/styled";

const WebGejmika = dynamic(
  () => {
    return import("web-gejmika-front");
  },
  { ssr: false }
);

const game = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const toggleTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const AntTab = styled(Tab)({
    fontSize: "24px",
    fontWeight: "bold",
    borderRadius: 2,
    color: "white",
    marginRight: "10px",
    "&.MuiTabs-indicator": {
      color: "red",
    },
    "&.Mui-selected": {
      color: "#56f5d8",
    },
    "&:hover": {
      color: "white",
      backgroundColor: "#15b3a0",
    },
  });

  return (
    <>
      <div className="w3-padding-48" id="main">
        <Tabs
          value={selectedTab}
          sx={{
            borderBottom: "1px solid #e8e8e8",
            "& .MuiTabs-indicator": {
              backgroundColor: "#15b3a0",
            },
          }}
          onChange={toggleTab}
          centered
        >
          <AntTab label="React.js" />
          <AntTab label="Vue.js" />
        </Tabs>
        <div
          className="w3-content w3-justify w3-text-grey w3-padding-16"
          id="game"
        >
          {selectedTab === 0 && (
            <div className="w3-padding-16">
              <WebGejmika />
            </div>
          )}
          {selectedTab === 1 && (
            <div className="w3-padding-16">
              <WebBombika />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default game;
