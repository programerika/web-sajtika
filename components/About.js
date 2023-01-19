import Image from "next/image";
import Link from "next/link";
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
                We are full stack software engineering team from Serbia, with
                accumulated expirience over 20 years of developing software. We
                have specialized knowledge about Finance, Banking and Logistics
                domains, we were developing and product managing GAMP level
                software for phamaceutical industry, we have experts for
                infrastrucuture and DevOps roles with strong knowledge about
                performance optimization of database and application services on
                premise as well on cloud. <br />
                Our mission is to nurture full stack engineering team with
                strenght for delivering efficient and modern solutions by
                constant education about well established industry practices
                like reactive programming, clean code and architecture, and good
                designing practices. Efficient solutions are very important
                today as global challenges demand reducing our footprint where
                efficent software implementation and architecture can have
                impact in reducing energy usage, paper usage, storage demands
                and infrastrucuture demands. We see that by constant learning
                and education of our team to be better software architects and
                developers we are setting our place in global support action
                group. <br />
                We prepared this site with some dynamic content using React.js +
                Next.js, Vue.js and some Spring boot backend for demo purposes.
                You can review our games design and implementation, or you can
                play.
              </p>
            </div>
            <div className="flex-row-column-2 w3-margin">
              <Link href="/#demo" passHref>
                <i className="mdi mdi-arrow-right-bold-circle  w3-btn w3-circle arrow-button" />
              </Link>
            </div>
          </div>
          <br></br>
          <div className="flex-row">
            <div className="flex-row-column-1">
              <p className="w3-justify">
                Technologies we use are carefully selected from mostly applied
                technologies and most efficient platforms. We gained experience
                with many technologies during our career that are not all listed
                on this site, nevertheless we are always focused to make best
                solution for customer following engineering practices and
                customer requirements for infrastructure and platform. Our team
                leads and software architects have more than 20 years of
                experience mostly in banking and logistics domains, with strong
                knowledge about software development practices. In recent years
                we focused to microservices architecture as we think it is right
                way to meet our mission goals. Our younger team members are
                software engineers with medior experence. Also we regularly hire
                begginers after they finish their studies so we can put them
                thru our 6 months intensive education about software engineering
                with hands-on approach by doing full software project from
                analysis and design, implementation, testing and documenting to
                delivery.
              </p>
            </div>
            <div className="flex-row-column-2 w3-margin">
              <Link href="/#technologies" passHref>
                <i className="mdi mdi-arrow-right-bold-circle  w3-btn w3-circle arrow-button" />
              </Link>
            </div>
          </div>
          <br></br>
          <div className="flex-row">
            <div className="flex-row-column-1">
              <p className="w3-justify">
                Infrastructure is very important aspect in software engineering
                starting from development, testing and staging environments to
                production environment. Here we care about security starting
                from first designs, to protected APIs, data and intelectuall
                property, by following polices like using encryption on our
                development machines e.g. bitlocker, user accounts limited
                access rights, to on premise or cloud servers and services where
                we plan which data will be available, how services will operate
                in development mode like fencing outgoing services e.g. email
                server. We plan for adequate resources for designed architecture
                e.g. kubernetes cluster for microservices oriented solution.
                <br />
                We provided infrastructure for this site using Kubernetes high
                availability cluster deployed on Raspberry Pi devices for demo
                purposes. You can read more about architecture and visit git
                repositories.
              </p>
            </div>
            <div className="flex-row-column-2 w3-margin">
              <Link href="/arch" passHref>
                <i className="mdi mdi-arrow-right-bold-circle  w3-btn w3-circle arrow-button" />
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
