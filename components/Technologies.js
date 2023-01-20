import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import reactLogo from "../public/img/react-logo.png";
import springLogo from "../public/img/spring-logo.png";
import mongoLogo from "../public/img/mongo-logo.png";
import postgresqlLogo from "../public/img/postgresql-logo.jpg";
import sqlserverLogo from "../public/img/sqlserver-logo.png";
import kafkaLogo from "../public/img/kafka-logo.png";
import rabbitLogo from "../public/img/rabbit-logo.jpg";
import redisLogo from "../public/img/redis-logo.png";
import kubeLogo from "../public/img/kube-logo.png";
import camelLogo from "../public/img/Camel.jpg";
import vueLogo from "../public/img/Vue.png";
import typescriptLogo from "../public/img/Typescript.png";
import golangLogo from "../public/img/Golang.png";
import csharpLogo from "../public/img/CSharp.png";
import dotNet from "../public/img/Net.jpg";
import azureDevOps from "../public/img/AzureDevOps.png";

const width = 120;
const height = 120;
const cardClass = "w3-circle";

const Technologies = () => {
  return (
    <>
      {/* Technologies Section */}
      <div
        className="w3-padding-16 w3-content w3-text-grey w3-justify"
        id="technologies"
      >
        <h2 className="w3-text-light-grey w3-center">Technologies We Use</h2>
        <hr className="w3-opacity w3-width-100" />
        <p>
          We are ready to work on projects using following technologies. Of
          course we have experiences with other technologies too and we can work
          with them.
        </p>
        <br />
        <br />
        <div className="w3-section">
          <div className="carousel-container">
            <Carousel
              autoPlay={false}
              additionalTransfrom={0}
              arrows={true}
              removeArrowOnDeviceType={["mobile", "mobileBig"]}
              autoPlaySpeed={2000}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={50}
              renderButtonGroupOutside={false}
              renderDotsOutside
              centerMode
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1200,
                  },
                  items: 3,
                },
                tablet: {
                  breakpoint: {
                    max: 1200,
                    min: 900,
                  },
                  items: 2,
                },
                mobileBig: {
                  breakpoint: {
                    max: 900,
                    min: 685,
                  },
                  items: 1,
                },
                mobile: {
                  breakpoint: {
                    max: 685,
                    min: 0,
                  },
                  items: 1,
                },
              }}
              showDots
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <Card
                image={reactLogo}
                description="We can use JS or typescript. Basic react project or with Next.js for full produciton requirements."
                title="React JS"
                alt="Picture of React JS logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image={vueLogo}
                description="We used Vue 3 with Vuetify on few projects, developing complex UI library and configurable application framework."
                title="Vue JS"
                alt="Picture of Vue JS logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image={typescriptLogo}
                description="TypeScript is our preference for any React.js or Vue.js project larger than very small applications."
                title="TypeScript"
                alt="Picture of Typescript logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image={springLogo}
                description="Our number one chooice for backend microservices as most complete and known platform. One of best platforms for microservice architecture."
                title="Spring Boot"
                alt="Picture of Spring Boot logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image={golangLogo}
                description="We had few projects developing backend services in Go. It is efficent programming language easy to learn and get started with."
                title="Golang"
                alt="Picture of Golang logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image={csharpLogo}
                description="We had many different projects where we used C# programming language including front end applications, back end applications and plugins."
                title="C#"
                alt="Picture of C# logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image={dotNet}
                description=".NET platform is also our choice for backend microservices, depending on related technologies, team experience and customer requirements."
                title=".NET"
                alt="Picture of .NET logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image={mongoLogo}
                description="We have experience in deploying this nosql database to multi node replication set, in administration, and in using complex aggregation queries."
                title="Mongo DB"
                alt="Picture of Mongo DB logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image={postgresqlLogo}
                description="Our senior DevOps have experience in administraiton and performance tuning of relational PostgreSQL databases. All our team members are proficient in SQL and have experience with complex database models."
                title="PostgreSQL"
                alt="Picture of PostgreSQL logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image={sqlserverLogo}
                description="Our senior DevOps have experience in administraiton and performance tuning of relational SQL Server databases. All our team members are proficient in T-SQL and have experience with complex database models."
                title="SQL Server"
                alt="Picture of SQL Server logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image={camelLogo}
                description="We used Apache Camel enteprise integration framework in multiple projects. Out team members are familiar with Enterprise Integration Patterns."
                title="Apache Camel"
                alt="Picture of Camel logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image={kafkaLogo}
                description="Message streaming solution for asynchronous communication between backend services. Our senior team members had experience in projects using Apache Kafka."
                title="Apache Kafka"
                alt="Picture of Apache Kafka logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image={rabbitLogo}
                description="Message queue solution for asynchronous communication between services. Our senior team members had experience in projects using Rabbit MQ."
                title="Rabbit MQ"
                alt="Picture of Rabbit MQ logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image={redisLogo}
                description="Caching solution used to store state and make services stateless. We used Redis in few projects for saving session state."
                title="Redis"
                alt="Picture of Redis logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image={kubeLogo}
                description="Microservices deployment orchestration solution. We have hands on experience in baremetal deployment of HA Kubernetes cluster, configuration and management."
                title="Kubernetes"
                alt="Picture of Kubernetes logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image={azureDevOps}
                description="Set of processes for developers, project managers, and contributors to develop, integrate and delivery software. Our senior DevOps have experience with Microsoft DevOps platform."
                title="Azure DevOps"
                alt="Picture of Azure DevOps logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
            </Carousel>
          </div>
        </div>
      </div>
      {/* End Technologies Section */}
    </>
  );
};

export default Technologies;
