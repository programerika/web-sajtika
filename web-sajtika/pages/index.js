import Head from "next/head";
import Image from "next/image";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Technologies from "../components/Technologies";

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

        <Contact />
      </div>
    </div>
  );
}
