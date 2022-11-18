import Contact from "../components/Contact";
import About from "../components/About";
import Technologies from "../components/Technologies";
import AboutGame from "../components/AboutGame";

export default function Home() {
  return (
    <div>
      {/* Page Content */}
      <div className="w3-padding-large" id="main">
        <About />
        <Technologies></Technologies>
        <AboutGame />
        <Contact />
      </div>
      {/* End Page Content */}
    </div>
  );
}
