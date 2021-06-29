import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const width = 250;
const height = 250;
const cardClass = "w3-circle";

const Technologies = () => {
  return (
    <>
      <div
        className="w3-padding-64 w3-content w3-text-grey w3-justify"
        id="technologies"
      >
        <h2 className="w3-text-light-grey w3-center">Technologies We Use</h2>
        <hr style={{ width: "100%" }} className="w3-opacity" />
        <p>
          We are eager to work on projects using following technologies. Of
          course we have experiences with other technologies too and we can work
          with them.
        </p>
        <br />
        <br />
        <div className="w3-section">
          <div
            style={{
              paddingBottom: "30px",
              position: "relative",
            }}
          >
            <Carousel
              autoPlay
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={2000}
              //centerMode
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 3,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              showDots
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <Card
                image="/img/react-logo.png"
                description="We can use JS or typescript. Basic react project or with Next.js for full produciton requirements."
                alt="Picture of React JS logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image="/img/spring-logo.png"
                description="One of best platforms for microservice architecture. "
                alt="Picture of Spring Boot logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image="/img/mongo-logo.png"
                description="Document store nosql database"
                alt="Picture of Mongo DB logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image="/img/postgresql-logo.jpg"
                description="Free relational database"
                alt="Picture of PostgreSQL logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image="/img/sqlserver-logo.png"
                description="Relation database with enterprise features"
                alt="Picture of SQL Server logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image="/img/kafka-logo.png"
                description="Message streaming solution mostly used for asynchronous communication between backend services."
                alt="Picture of Apache Kafka logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image="/img/rabbit-logo.jpg"
                description="Message queue solution for asynchronous communication between services focused on specific business cases."
                alt="Picture of Rabbit MQ logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image="/img/redis-logo.png"
                description="Caching solution used to store state and make services stateless."
                alt="Picture of Redis logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
              <Card
                image="/img/kube-logo.png"
                description="Microservices deployment orchestration solution."
                alt="Picture of Kubernetes logo."
                width={width}
                height={height}
                cardClass={cardClass}
              ></Card>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
