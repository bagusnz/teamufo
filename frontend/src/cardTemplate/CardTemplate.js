import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import bgimg from "../img/v990-129a.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import LeaderBoard from "../challengePage/LeaderBoard";

const trans = `rgba(210, 210, 210, 0.9)`;
const cardTemplate = () => {
  return (
    <>
      <div className="top-banner">
        <div
          className="top-banner"
          style={{
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: 400,
            color: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              border: "10px solid white",
              padding: 30,
              backgroundColor: trans,
            }}
          >
            <h1 className="top-div">Do Your Challenges</h1>
          </p>
        </div>
      </div>
      <div>
        <Container>
          <Row className="mt-5 mb-5">
            <Col>
              <Card className="col-sm">
                <Card.Img
                  src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                  alt="Card image"
                  variant="top"
                />
                <div className="bg-image hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
                <Card.Body>
                  <Card.Title>Challenge title</Card.Title>
                  <div>
                    <Badge bg="light" text="dark" className="mb-2 mr-2">
                      Category1
                    </Badge>
                    <Badge bg="light" text="dark" className="mb-2 mr-2">
                      Category2
                    </Badge>
                    <Badge bg="light" text="dark" className="mb-2 mr-2">
                      Category3
                    </Badge>
                  </div>
                  <Card.Text>Here is the description.</Card.Text>

                  <Button className="btn-success" href="#">
                    + 20 P
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="col-sm">
                <Card.Img
                  src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                  alt="Card image"
                  variant="top"
                />
                <div className="bg-image hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
                <Card.Body>
                  <Card.Title>Challenge title</Card.Title>
                  <div>
                    <Badge bg="light" text="dark" className="mb-2 mr-2">
                      Category1
                    </Badge>
                    <Badge bg="light" text="dark" className="mb-2 mr-2">
                      Category2
                    </Badge>
                    <Badge bg="light" text="dark" className="mb-2 mr-2">
                      Category3
                    </Badge>
                  </div>
                  <Card.Text>Here is the description.</Card.Text>

                  <Button className="btn-success" href="#">
                    + 20 P
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="col-sm">
                <Card.Img
                  src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                  alt="Card image"
                  variant="top"
                />
                <div className="bg-image hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
                <Card.Body>
                  <Card.Title>Challenge title</Card.Title>
                  <div>
                    <Badge bg="light" text="dark" className="mb-2 mr-2">
                      Category1
                    </Badge>
                    <Badge bg="light" text="dark" className="mb-2 mr-2">
                      Category2
                    </Badge>
                    <Badge bg="light" text="dark" className="mb-2 mr-2">
                      Category3
                    </Badge>
                  </div>
                  <Card.Text>Here is the description.</Card.Text>

                  <Button className="btn-success" href="#">
                    + 20 P
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <LeaderBoard />
      </div>
    </>
  );
};
export default cardTemplate;
