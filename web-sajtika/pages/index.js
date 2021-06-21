import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MyHead from "../components/Head";

export default function Home() {
  return (
    <div>
      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        {/* Avatar image in top left corner */}
        <Image src="/img/logo.png" alt="me" width="200" height="200" />
        <a href="#" className="w3-bar-item w3-button w3-padding-large w3-black">
          <i className="fa fa-home w3-xxlarge" />
          <p>HOME</p>
        </a>
        <a
          href="#about"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-user w3-xxlarge" />
          <p>ABOUT</p>
        </a>
        <a
          href="#photos"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-eye w3-xxlarge" />
          <p>PHOTOS</p>
        </a>
        <a
          href="#contact"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-envelope w3-xxlarge" />
          <p>CONTACT</p>
        </a>
      </nav>
      {/* Navbar on small screens (Hidden on medium and large screens) */}
      <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <a
            href="#"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
            HOME
          </a>
          <a
            href="#about"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
            ABOUT
          </a>
          <a
            href="#photos"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
            PHOTOS
          </a>
          <a
            href="#contact"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
            CONTACT
          </a>
        </div>
      </div>
      {/* Page Content */}
      <div className="w3-padding-large" id="main">
        {/* Header/Home */}
        <header
          className="w3-container w3-padding-32 w3-center w3-black"
          id="home"
        >
          <h1 className="w3-jumbo">
            <span className="w3-hide-small">We are</span> Programerika.
          </h1>
          <p>Software Engineering &amp; Design</p>
          <Image
            src="/img/logo.png"
            alt="me"
            width="992"
            height="1108"
            className="w3-image"
          />
        </header>
        {/* About Section */}
        <div
          className="w3-content w3-justify w3-text-grey w3-padding-64"
          id="about"
        >
          <h2 className="w3-text-light-grey">My Name</h2>
          <hr style={{ width: "200px" }} className="w3-opacity" />
          <p>
            Some text about me. Some text about me. I am lorem ipsum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
          <p className="w3-wide">Photography</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "28px", width: "95%" }}
            />
          </div>
          <p className="w3-wide">Web Design</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "28px", width: "85%" }}
            />
          </div>
          <p className="w3-wide">Photoshop</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "28px", width: "80%" }}
            />
          </div>
          <br />
          <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">11+</span>
              <br />
              Partners
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">55+</span>
              <br />
              Projects Done
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">89+</span>
              <br />
              Happy Clients
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">150+</span>
              <br />
              Meetings
            </div>
          </div>
          <button className="w3-button w3-light-grey w3-padding-large w3-section">
            <i className="fa fa-download" /> Download Resume
          </button>

          {/* End About Section */}
        </div>
        {/* Portfolio Section */}
        <div className="w3-padding-64 w3-content" id="photos">
          <h2 className="w3-text-light-grey">My Photos</h2>
          <hr style={{ width: "200px" }} className="w3-opacity" />
          {/* Grid for photos */}
          <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
            <div className="w3-half">
              <img src="/w3images/wedding.jpg" style={{ width: "100%" }} />
              <img src="/w3images/rocks.jpg" style={{ width: "100%" }} />
              <img src="/w3images/sailboat.jpg" style={{ width: "100%" }} />
            </div>
            <div className="w3-half">
              <img src="/w3images/underwater.jpg" style={{ width: "100%" }} />
              <img src="/w3images/chef.jpg" style={{ width: "100%" }} />
              <img src="/w3images/wedding.jpg" style={{ width: "100%" }} />
              <img src="/w3images/p6.jpg" style={{ width: "100%" }} />
            </div>
            {/* End photo grid */}
          </div>
          {/* End Portfolio Section */}
        </div>
        {/* Contact Section */}
        <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
          <h2 className="w3-text-light-grey">Contact Me</h2>
          <hr style={{ width: "200px" }} className="w3-opacity" />
          <div className="w3-section">
            <p>
              <i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right" />{" "}
              Chicago, US
            </p>
            <p>
              <i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right" />{" "}
              Phone: +00 151515
            </p>
            <p>
              <i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right">
                {" "}
              </i>{" "}
              Email: mail@mail.com
            </p>
          </div>
          <br />
        </div>
        {/* Footer */}
        <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge">
          <i className="fa fa-facebook-official w3-hover-opacity" />
          <i className="fa fa-instagram w3-hover-opacity" />
          <i className="fa fa-snapchat w3-hover-opacity" />
          <i className="fa fa-pinterest-p w3-hover-opacity" />
          <i className="fa fa-twitter w3-hover-opacity" />
          <i className="fa fa-linkedin w3-hover-opacity" />
          <p className="w3-medium">
            Powered by{" "}
            <a
              href="https://www.w3schools.com/w3css/default.asp"
              target="_blank"
              className="w3-hover-text-green"
            >
              w3.css
            </a>
          </p>
          {/* End footer */}
        </footer>
        {/* END PAGE CONTENT */}
      </div>
    </div>
  );
}
