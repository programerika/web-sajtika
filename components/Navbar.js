import Image from "next/image";
import Link from "next/link";
import logoGray from "../public/img/logo_gray.png";

const Navbar = () => {
  return (
    <div>
      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        <Image
          src={logoGray}
          alt="Programerika gray logo"
          width="100"
          height="100"
          placeholder="blur"
        />
        <Link href="/#">
          <a className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-home w3-xxlarge" />
            <p>HOME</p>
          </a>
        </Link>
        <Link href="/#about">
          <a className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-user w3-xxlarge" />
            <p>ABOUT</p>
          </a>
        </Link>
        <Link href="/#technologies">
          <a className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-code w3-xxlarge" />
            <p>TECH</p>
          </a>
        </Link>
        <Link href="/#demo">
          <a className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-gamepad w3-xxlarge"></i>
            <p>DEMO</p>
          </a>
        </Link>
        <Link href="/#contact">
          <a className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-envelope w3-xxlarge" />
            <p>CONTACT</p>
          </a>
        </Link>
      </nav>
      {/* Navbar on small screens (Hidden on medium and large screens) */}
      <div
        className="w3-top w3-hide-large w3-hide-medium w3-center"
        id="myNavbar"
      >
        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <Link href="/">
            <a
              className="w3-bar-item w3-button"
            >
              HOME
            </a>
          </Link>
          <Link href="/#about">
            <a
              className="w3-bar-item w3-button"
            >
              ABOUT
            </a>
          </Link>
          <Link href="/#technologies">
            <a
              className="w3-bar-item w3-button"
            >
              TECH
            </a>
          </Link>
          <Link href="/#demo">
            <a
              className="w3-bar-item w3-button"
            >
              DEMO
            </a>
          </Link>
          <Link href="/#contact">
            <a
              className="w3-bar-item w3-button w3-center"
            >
              CONTACT
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
