/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import {Badge, Button, Card, CardBody, Col, Container, Row,} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import * as PropTypes from "prop-types";

// index page sections

class ChallengeHeader extends React.Component {
  render() {
    return <>
      <Container className="py-lg-md d-flex">
        <div className="col px-0">
          <Row>
            <Col lg="6">
              <h1 className="display-3 text-white">
                Challenge{" "}
                <span>completed with examples</span>
              </h1>
              <p className="lead text-white">
                The design system comes with four pre-built pages to
                help you get started faster. You can change the text and
                images and you're good to go.
              </p>
              <div className="btn-wrapper">
                <Button
                    className="btn-icon mb-3 mb-sm-0"
                    color="info"
                    href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code"/>
                          </span>
                  <span className="btn-inner--text">Components</span>
                </Button>
                <Button
                    className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                    color="default"
                    href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95"/>
                          </span>
                  <span className="btn-inner--text">
                            Download React
                          </span>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      {/* SVG separator */}
    </>;
  }
}

class ChallengeCardContainer extends React.Component {
  render() {
    return <section className="section section-lg pt-lg-0 mt--200">
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <Row className="row-grid">
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-5">
                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                      <i className="ni ni-check-bold"/>
                    </div>
                    <h6 className="text-primary text-uppercase">
                      Reduce food waste
                    </h6>
                    <p className="description mt-3">
                      Erklärung:
                    </p>
                    <Button
                        className="mt-4"
                        color="primary"
                        href="#pablo"
                        onClick={this.props.onClick}
                    >
                      to do
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-5">
                    <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                      <i className="ni ni-istanbul"/>
                    </div>
                    <h6 className="text-success text-uppercase">
                      One Vegetarian Meal per Day
                    </h6>
                    <p className="description mt-3">
                      Erklärung:
                    </p>
                    <Button
                        className="mt-4"
                        color="success"
                        href="#pablo"
                        onClick={this.props.onClick}
                    >
                      to do
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-5">
                    <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                      <i className="ni ni-planet"/>
                    </div>
                    <h6 className="text-warning text-uppercase">
                      Taking a Public Transportation
                    </h6>
                    <p className="description mt-3">
                      Erklärung:
                    </p>
                    <Button
                        className="mt-4"
                        color="warning"
                        href="#pablo"
                        onClick={this.props.onClick}
                    >
                      to do
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="row-grid">
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-5">
                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                      <i className="ni ni-check-bold"/>
                    </div>
                    <h6 className="text-primary text-uppercase">
                      Buy regional products instead of imported ones
                    </h6>
                    <p className="description mt-3">
                      Erklärung:
                    </p>
                    <Button
                        className="mt-4"
                        color="primary"
                        href="#pablo"
                        onClick={this.props.onClick}
                    >
                      to do
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-5">
                    <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                      <i className="ni ni-istanbul"/>
                    </div>
                    <h6 className="text-success text-uppercase">
                      Turning off your electric devices
                    </h6>
                    <p className="description mt-3">
                      Erklärung:
                    </p>
                    <Button
                        className="mt-4"
                        color="success"
                        href="#pablo"
                        onClick={this.props.onClick}
                    >
                      to do
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>;
  }
}

ChallengeCardContainer.propTypes = {onClick: PropTypes.func};

class Challenge extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar/>
        <main ref="main">
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
              </div>
              <ChallengeHeader/>
              <div className="separator separator-bottom separator-skew">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                  <polygon
                      className="fill-white"
                      points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <ChallengeCardContainer onClick={(e) => e.preventDefault()}/>
        </main>
        <CardsFooter/>
      </>
    );
  }
}

export default Challenge;
