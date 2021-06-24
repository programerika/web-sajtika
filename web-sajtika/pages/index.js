import Head from "next/head";
import Image from "next/image";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Technologies from "../components/Technologies";
import AboutGame from "../components/AboutGame";

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
        <Technologies></Technologies>
        <AboutGame />
        <Contact />
        <footer className="w3-content w3-padding-64">
          <p className="w3-center w3-text-gray">Programerika &copy; 2021</p>
        </footer>
      </div>
    </div>
  );
}
