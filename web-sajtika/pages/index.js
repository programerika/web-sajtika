import Head from "next/head";
import Image from "next/image";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Programerika</title>
      </Head>
      <Navbar />
      {/* Page Content */}
      <div className="w3-padding-large" id="main">
        <About />
        {/* Portfolio Section */}
        <div className="w3-padding-64 w3-content" id="photos">
          <h2 className="w3-text-light-grey w3-center">My Photos</h2>
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
        <Contact />
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
