import React from "react";
import Image from "next/image";
import Raspberry from "../public/img/Cover-1-2M.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const AboutArch = () => {
  return (
    <div>
      {/* About Arch Section */}
      <div
        className="w3-content w3-justify w3-text-grey w3-padding-16"
        id="game"
      >
        <h2 className="w3-text-light-grey w3-center">Architecture</h2>
        <hr className="w3-opacity w3-width-100" />
        <div className="w3-half">
          <p>
            We have choosen architecture with having in mind that we are making
            a demo. We are aware that choosen architecture is overhead for such
            small site with some dynamic content. <br></br>
            <br></br>
            Site is deployed in two Kubernetes services. One for frontend hosted
            in node.js server and second for scores microservices hosted in
            Spring boot application server. Database is MongoDB deployed
            separately in three node replication set with automatic failover.
            Kubernetes is deployed as three node control plane high availability
            cluster with keepalived + HAProxy cluster virtual IP manager and
            load balancer. All Kubernetes nodes are enabled for scheduling to
            utilize available resources. <br></br>
            <br></br>
            API access to services is managed by Ingress with Ingress controller
            nginx. Ingress maps API URL path to right services thus providing
            single point of entrance to Kubernetes cluster.
            <br />
          </p>
        </div>
        <div className="w3-half">
          <div className="w3-center w3-margin">
            <Zoom>
              <Image
                src="/img/kubernetes-cluster-diagram.png"
                alt="kubernetes-diagram-logo"
                width="742"
                height="551"
                priority
              />
            </Zoom>
          </div>
        </div>

        <div className="w3-container">
          <div className="flex-container-git-links ">
            <div className="w3-panel flex-panel-git-logo w3-center">
              <i className="fa fa-github fa-fw w3-text-white w3-jumbo" />
              <p>Git links </p>
            </div>
            <div className="w3-panel flex-panel-git-links">
              <table className="w3-table w3-responsive ">
                <tbody>
                  <tr>
                    <td className="w3-text-white">
                      <a
                        href="https://github.com/programerika/web-sajtika"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Project repo
                      </a>
                    </td>
                    <td>
                      <span> | </span>
                    </td>
                    <td>
                      Web site GIT repository. Technologies React.js + Next.js.
                      Styles w3.css with small ajustments.
                    </td>
                  </tr>
                  <tr>
                    <td className="w3-text-white">
                      <a
                        href="https://github.com/programerika/web-gejmika-front"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GAME REACT.js repo
                      </a>
                    </td>
                    <td>
                      <span> | </span>
                    </td>
                    <td>
                      Code guess game front-end GIT repository. Technologies
                      React.js with Redux. Used CSS module with local styles.
                      Deployed as webpacked component with inlined resources.
                    </td>
                  </tr>
                  <tr>
                    <td className="w3-text-white">
                      <a
                        href="https://github.com/programerika/web-bombika"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GAME VUE.js repo
                      </a>
                    </td>
                    <td>
                      <span> | </span>
                    </td>
                    <td>
                      Mine guess game front-end GIT repository. Technologies
                      Vue.js with Vuetify. Used CSS scoped style and Vuetify
                      components. Deployed as library component with inlined
                      resources.
                    </td>
                  </tr>
                  <tr>
                    <td className="w3-text-white">
                      <a
                        href="https://github.com/programerika/web-gejmika-back"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GAME BE repo
                      </a>
                    </td>
                    <td>
                      <span> | </span>
                    </td>
                    <td>
                      Code guess game back-end GIT repository. Technologies Java
                      Springboot with MongoDB database.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w3-container">
          <Image
            src={Raspberry}
            alt="Raspberry pi cluster"
            className="w3-image w3-margin"
            width="2294"
            height="913"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutArch;
