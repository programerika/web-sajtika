import Image from "next/image";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Technologies from "../components/Technologies";
import AboutGame from "../components/AboutGame";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Page Content */}
      <div className="w3-padding-large" id="main">
        <About />
        <Technologies></Technologies>
        <AboutGame />
        <Contact />
      </div>
    </div>
  );
}
