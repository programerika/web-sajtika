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

        {/* End About Section */}
      </div>
    </div>
  );
};

export default About;
