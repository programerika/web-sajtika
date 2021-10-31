import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div>
      {/* Header/Home */}
      <header
        className="w3-container w3-padding w3-center w3-black w3-padding-16"
        id="home"
      >
        <h1 className="w3-xxlarge">
          <span className="w3-hide-small">We are</span>
        </h1>

        <Image
          src="/img/logo.png"
          alt="Picture of programerika logo"
          width="300"
          height="300"
          className="w3-image"
        />
        <p>Software engineering team</p>
      </header>
      {/* About Section */}
      <div
        className="w3-content w3-justify w3-text-grey w3-padding-16"
        id="about"
      >
        <h2 className="w3-text-light-grey w3-center">About us</h2>
        <hr className="w3-opacity w3-width-100" />
        <p>
          Full stack software developer team from Serbia striving to design and
          implement efficient software solutions for it’s customers. We prepared
          this site with some dynamic content using React.js + Next.js and some
          Spring boot backend to show what we can do. You can review our game
          (ref link) design and implementation, or you can play it. <br></br>
          <br></br>
          Our team is consisted of software developer professionals having team
          leads with more than 20 years of experience in software development
          covering many technologies, including system architecture and
          performance optimization. We have special domain knowledge in Banking
          and Logistics domains. <br></br>
          <br></br>
          Architecture of system that hosts this site is based on Kubernetes
          high availability cluster deployed on Raspberry Pi devices …
          <Link href="/arch">
            <a className="w3-text-white">MORE</a>
          </Link>
          <br></br>
          <br></br>
        </p>
        <div className="raspberry-logo w3-center w3-padding">
          <Image
            src="/img/raspberry-pi-logo.jpg"
            alt="Picture of raspberry pi logo"
            width="400"
            height="160"
          />
        </div>
        {/* End About Section */}
      </div>
    </div>
  );
};

export default About;
