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
              <h1>First slide label</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          My Points: 400    </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-h"
              src={sustainable}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-h"
              src={forest}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Values />

        <IntroNotification />

        <TeamMember />

      </main>
    </>
  );
};
export default Home;
