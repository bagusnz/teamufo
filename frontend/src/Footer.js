import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import "./FooterCss.css";
const Footer = () => {
  return (
    <>
      <footer className="footer-general footer">
        <Container>
          <Row className=" row-grid align-items-center mb-5">
            <Col lg="6">
              <h3 className=" text-primary font-weight-light mb-2">
                Make a Footer
              </h3>
              <h4 className=" mb-0 font-weight-light">
                Let's get in touch on any of these platforms.
              </h4>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
