import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        {/* Avatar image in top left corner */}
        <Image src="/img/logo_gray.png" alt="me" width="100" height="100" />
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
        <Link href="/#game">
          <a className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-gamepad w3-xxlarge"></i>
            <p>GAME</p>
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
              // style={{ width: "18% !important" }}
            >
              HOME
            </a>
          </Link>
          <Link href="/#about">
            <a
              className="w3-bar-item w3-button"
              // style={{ width: "18% !important" }}
            >
              ABOUT
            </a>
          </Link>
          <Link href="/#technologies">
            <a
              className="w3-bar-item w3-button"
              // style={{ width: "18% !important" }}
            >
              TECH
            </a>
          </Link>
          <Link href="/#game">
            <a
              className="w3-bar-item w3-button"
              // style={{ width: "18% !important" }}
            >
              GAME
            </a>
          </Link>
          <Link href="/#contact">
            <a
              className="w3-bar-item w3-button w3-center"
              // style={{ width: "25% !important" }}
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
