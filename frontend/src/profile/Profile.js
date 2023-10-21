import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import profilePicture from "../img/smile.jpg";

function Profile() {
  return (
    <section className="py-6 py-sm-12">
      <Container>
        <Row className="mt-5 justify-content-center">
          <Col xs={12} className="text-center mb-5">
            <img
              src={profilePicture}
              alt="profile"
              className="img-xxl shadow-xl"
            />
          </Col>
          <Row className="py-6">
            <Col></Col>
            <Col xs={12} md={7} className="mx-auto mx-sm-6 mx-md-1">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <h3>Michael Roven</h3>
                <Button variant="outline-success" size="sm">
                  Edit
                </Button>
              </div>
              <Row className="m-lg-0 mb-lg-3">
                <Col>
                  <Row>Email</Row>
                  <Row>example@gmail.com</Row>
                </Col>
                <Col>
                  <Row>Point</Row>
                  <Row>12345</Row>
                </Col>
                <Col></Col>
              </Row>
              <p className="font-weight-light">
                Decisions: If you can't decide, the answer is no. If two equally
                difficult paths, choose the one more painful in the short term
                (pain avoidance is creating an illusion of equality). Choose the
                path that leaves you more equanimous.
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
}

export default Profile;
