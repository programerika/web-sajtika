import React from "react";
import Carousel from "react-multi-carousel";
import WithStyles from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/dist/client/image";
import Card from "./Card";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Technologies = () => {
  return (
    <>
      <div
        className="w3-padding-64 w3-content w3-text-grey w3-justify"
        id="contact"
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
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode
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
            renderDotsOutside={false}
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
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <Card
              image="http://reacttrainingcamp.com/images/react-logo.png"
              description="We can use JS or typescript. Basic react project or with Next.js for full produciton requirements."
            ></Card>
            <Card
              image="https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png"
              description="One of best platforms for microservice architecture. "
            ></Card>
            <Card
              image="https://gcollazo.github.io/mongodbapp/assets/img/icon.png"
              description="Document store nosql database"
            ></Card>
            <Card
              image="https://pbs.twimg.com/profile_images/938272746328543232/kxHkAenZ_400x400.jpg"
              description="Free relational database"
            ></Card>
            <Card
              image="https://my.cyclr.com/api/ConnectorIcon/11824"
              description="Relation database with enterprise features"
            ></Card>
            <Card
              image="https://www.influxdata.com/wp-content/uploads/Apache-kafka.png"
              description="Message streaming solution mostly used for asynchronous communication between backend services."
            ></Card>
            <Card
              image="https://pbs.twimg.com/profile_images/1223261138059780097/eH73w5lN_400x400.jpg"
              description="Message queue solution for asynchronous communication between services focused on specific business cases."
            ></Card>
            <Card
              image="https://pbs.twimg.com/profile_images/1285653263824691205/mu4nJ7Gb_400x400.png"
              description="Caching solution used to store state and make services stateless."
            ></Card>
            <Card
              image="https://cloudnesil.com/wp-content/uploads/2018/12/kuberneteslogo.png"
              description="Microservices deployment orchestration solution."
            ></Card>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Technologies;
