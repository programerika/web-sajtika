import Image from "next/image";
import Link from "next/link";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import logo from "../public/img/logo.png";

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
          src={logo}
          alt="Programerika logo"
          className="w3-image"
          width="300"
          height="300"
          priority
          placeholder="blur"
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

        <div className="w3-center">
          <div className="flex-row">
            <div className="flex-row-column-1">
              <p className="w3-justify">
                Full stack software developer team from Serbia striving to
                design and implement efficient software solutions for it’s
                customers. We prepared this site with some dynamic content using
                React.js + Next.js and some Spring boot backend for demo
                purposes. You can review our game design and implementation, or
                you can play it.
              </p>
            </div>
            <div className="flex-row-column-2 w3-margin">
              <Link href="/#demo" passHref>
                <ArrowCircleRightOutlinedIcon className="arrow-button w3-btn w3-circle" />
              </Link>
            </div>
          </div>
          <br></br>
          <div className="flex-row">
            <div className="flex-row-column-1">
              <p className="w3-justify">
                Our team is consisted of software developer professionals having
                team leads with more than 20 years of experience in software
                development covering many technologies, including system
                architecture and performance optimization. We have special
                domain knowledge in Banking and Logistics domains.
              </p>
            </div>
            <div className="flex-row-column-2 w3-margin">
              <Link href="/#technologies" passHref>
                <ArrowCircleRightOutlinedIcon className="arrow-button w3-btn w3-circle" />
              </Link>
            </div>
          </div>
          <br></br>
          <div className="flex-row">
            <div className="flex-row-column-1">
              <p className="w3-justify">
                Architecture of system that hosts this site is based on
                Kubernetes high availability cluster deployed on Raspberry Pi
                devices.
              </p>
            </div>
            <div className="flex-row-column-2 w3-margin">
              <Link href="/arch" passHref>
                <ArrowCircleRightOutlinedIcon className="arrow-button w3-btn w3-circle" />
              </Link>
            </div>
          </div>
        </div>

        {/* End About Section */}
      </div>
    </div>
  );
};

export default About;
