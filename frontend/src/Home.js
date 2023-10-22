import React from "react";
import Carousel from "react-bootstrap/Carousel";
import sustainable from "./img/sustainable.jpg";
import forest from "./img/greenforest.jpg";
import green from "./img/green.jpg";
import Values from "./values";
import IntroNotification from "./introNotification";
import TeamMember from "./TeamMember";

const Home = () => {
  const trans = `rgba(240, 240, 240, 0.7)`;
  return (
    <>
      <main>
        <Carousel className="carousel-bottom" data-bs-theme="light">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-h"
              src={green}
              alt="First slide"
            />
            <Carousel.Caption className="carousel-center">
              <div style={{
                backgroundColor: trans,
                padding:50,
                transition: 0.5,
                color: 'black',
                borderRadius: 10000,

              }}>
                <h1>#SustainableTomorrow</h1>
                <h1>Team UFO</h1>
                <p>
                  powered by Google Cloud
                  <br />
                  from Collabothon 2023
                </p>
              </div>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-h"
              src={sustainable}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1>#SustainableTomorrow</h1>
              <p>
                powered by Google Cloud
                <br />
                from Collabothon 2023
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-h"
              src={forest}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>#SustainableTomorrow</h1>
              <p>
                powered by Google Cloud
                <br />
                from Collabothon 2023
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Values />
        <div style={{ marginBottom: 100 }}></div>
        <IntroNotification />
        <div style={{ marginBottom: 100 }}></div>
        <TeamMember />
        <div style={{ marginBottom: 100 }}></div>
      </main>
    </>
  );
};
export default Home;
