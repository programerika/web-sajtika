import React from "react";

const Footer = () => {
  return (
    
    <div className="w3-padding-large" id="main">
      {/* Footer Section */}
      <footer className="w3-content w3-padding-16">
        <div className="w3-section w3-center">
          <p className="w3-text-gray">
            <i className="fa fa-github fa-fw w3-text-white w3-xxlarge w3-margin-right">
              {" "}
            </i>{" "}
            <a
              href="https://github.com/programerika/web-sajtika"
              target="_blank"
              rel="noreferrer"
            >
              Project repo
            </a>{" "}
            <span> | </span>
            {"   "}
            <a
              href="https://github.com/programerika/web-gejmika-front"
              target="_blank"
              rel="noreferrer"
            >
              GAME REACT repo
            </a>{" "}
            <span> | </span>
            {"   "}
            <a
              href="https://github.com/programerika/web-bombika"
              target="_blank"
              rel="noreferrer"
            >
              GAME VUE repo
            </a>{" "}
            <span> | </span>
            {"   "}
            <a
              href="https://github.com/programerika/web-gejmika-back"
              target="_blank"
              rel="noreferrer"
            >
              GAME BE repo
            </a>
            {"   "}
          </p>
          <p className="w3-center w3-text-gray w3-small">
            Programerika &copy; 2021
          </p>
        </div>
      </footer>
      {/* End Footer Section */}
    </div>
  );
};

export default Footer;
