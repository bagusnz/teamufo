import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import sustainable from "./img/sustainable.jpg";
import forest from "./img/greenforest.jpg";
import green from "./img/green.jpg";
import Values from "./values";
import IntroNotification from "./introNotification";
import TeamMember from "./TeamMember";


const Home = () => {
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
              <h1>#SustainableTomorrow</h1>
              <h1>Team UFO</h1>
              <p>
                powered by Google Cloud<br/>
                from Collabothon 2023
              </p>
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
                powered by Google Cloud<br/>
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
                powered by Google Cloud<br/>
                from Collabothon 2023
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Values />
        <div style={{marginBottom:300}}></div>
        <IntroNotification />
        <div style={{marginBottom:300}}></div>
        <TeamMember />
        <div style={{marginBottom:300}}></div>
      </main>
    </>
  );
};
export default Home;
