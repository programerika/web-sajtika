import Image from "next/image";

const About = () => {
    return ( 
        <div>
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
        </div>
     );
}
 
export default About;