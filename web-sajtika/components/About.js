import Image from "next/image";

const About = () => {
  return (
    <div>
      {/* Header/Home */}
      <header
        className="w3-container w3-padding-20 w3-center w3-black"
        id="home"
      >
        <h1 className="w3-xxxlarge">
          <span className="w3-hide-small">We are</span> Programerika.
        </h1>
        <p>Software Engineering &amp; Design</p>
        <Image
          src="/img/logo.png"
          alt="me"
          width="650"
          height="650"
          className="w3-image"
        />
      </header>
      {/* About Section */}
      <div className="w3-content w3-justify w3-text-grey" id="about">
<<<<<<< HEAD
        <h2 className="w3-text-light-grey w3-center">About Us</h2>
        <hr style={{ width: "100%" }} className="w3-opacity" />
        <p>
          Full stack software developer team from Serbia striving to design and
          implement efficient software solutions for it’s customers. We prepared
          this site with some dynamic content using React.js + Next.js and some
          Spring boot backend to show what we can do. You can review our game
          (ref link) design and implementation, or you can play it. Our team is
          consisted of software developer professionals having team leads with
          more than 20 years of experience in software development covering many
          technologies, including system architecture and performance
          optimization. We have special domain knowledge in Banking and
          Logistics domains.
        </p>
        <h3 className="w3-padding-16 w3-text-light-grey w3-center">
          My Skills
        </h3>
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

=======
        <h2 className="w3-text-light-grey">About us</h2>
        <hr style={{ width: "200px" }} className="w3-opacity" />
        <p>
          Full stack software developer team from Serbia striving to design 
          and implement efficient software solutions for it’s customers. 
          We prepared this site with some dynamic content using React.js + Next.js 
          and some Spring boot backend to show what we can do. You can review our game 
          (ref link) design and implementation, or you can play it. <br></br><br></br>
          Our team is consisted of software developer professionals having team leads 
          with more than 20 years of experience in software development covering many technologies, 
          including system architecture and performance optimization. We have special domain 
          knowledge in Banking and Logistics domains. <br></br><br></br>
          Architecture of system that hosts this site is based on Kubernetes high availability 
          cluster deployed on Raspberry Pi  devices … MORE (link to ARCH page)
        </p>
>>>>>>> 8cda7b958af06c59d2431cf36d53b25a43c3d3e0
        {/* End About Section */}
      </div>
    </div>
  );
};

export default About;
