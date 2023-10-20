import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const Test = () => {
  return(
      <>
        <div className="position-relative">
          {/* shape Hero */}
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-default">
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-black">
                      A beautiful Design System{" "}
                      <span>completed with examples</span>
                    </h1>
                    <p className="lead text-black">
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
                            <i className="fa fa-code" />
                          </span>
                        <span className="btn-inner--text">Components</span>
                      </Button>
                      <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                      >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
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
            <div className="separator separator-bottom separator-skew">

            </div>
          </section>
        </div>
      </>
  );

};
export default Test;
