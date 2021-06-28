import React from "react";
import Navbar from "./Navbar";

const AboutArch = () => {
  return (
    <div>
      {/* About Arch Section */}
      <div className="w3-content w3-justify w3-text-grey" id="game">
        <h2 className="w3-text-light-grey w3-center">Architecture</h2>
        <hr style={{ width: "100%" }} className="w3-opacity" />
        <p>
          We designed architecture with having in mind that we want to make a
          demo. We are aware that such architecture is overhead for such small
          site with some dynamic content. <br></br>
          <br></br>
          Site is deployed in two Kubernetes services. One for frontend hosted
          in node.js server and second for scores microservices hosted in Spring
          boot application server. Database is MongoDB deployed separately in
          three node replication sets with automatic failover. Kubernetes is
          deployed as three node control plane high availability cluster with
          keepalived + HAProxy cluster virtual IP manager and load balancer. All
          Kubernetes nodes are enabled for scheduling to utilize available
          resources. <br></br>
          <br></br>
          API access to services is managed by Ingress with Ingress controller
          nginx. Ingress maps API URL path to right services thus providing
          single point of entrance to Kubernetes cluster.
          <br />
        </p>
        <div className="w3-section w3-center">
          <h2 className="w3-text-light-grey w3-center">Git Links</h2>
          <hr style={{ width: "100%" }} className="w3-opacity" />
          <p>
            <i className="fa fa-github fa-fw w3-text-white w3-xxlarge w3-margin-right">
              {" "}
            </i>{" "}
            <a href="https://github.com/programerika/web-sajtika">
              Project repo
            </a>{" "}
            <span> | </span>
            {"   "}
            <a href="https://github.com/programerika/web-sajtika">
              GAME FE repo
            </a>{" "}
            <span> | </span>
            {"   "}
            <a href="https://github.com/programerika/web-sajtika">
              GAME BE repo
            </a>
            {"   "}
          </p>
          <br />
          <br />
        </div>
        {/* End About Arch Section */}
      </div>
    </div>
  );
};

export default AboutArch;
