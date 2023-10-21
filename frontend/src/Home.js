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

        <div className="position-relative">
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-default"></div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-black">
                      A beautiful Design System{" "}
                      <span>completed with examples</span>
                    </h1>
                    <p className="lead text-black">
                      The design system comes with four pre-built pages to help
                      you get started faster. You can change the text and images
                      and you're good to go.
                    </p>
                    <div className="btn-wrapper">
                      <Button className="btn-success mb-3 mb-sm-0 button-right">
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-code" />
                        </span>
                        <span className="btn-inner--text">Components</span>
                      </Button>
                      <Button
                        className="btn-success btn-icon mb-3 mb-sm-0 ml-1"
                        href="/Challenge"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-cloud-download-95" />
                        </span>
                        <span className="btn-inner--text">Challenge</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="separator separator-bottom separator-skew"></div>
          </section>
        </div>
      </main>
    </>
  );
};
export default Home;
