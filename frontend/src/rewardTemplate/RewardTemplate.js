import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./rewardVertical.css";
import React from "react";
import bgimg from "../img/v990-129a.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
const trans = `rgba(210, 210, 210, 0.9)`;

const RewardTemplate = () => {
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
            <h1 className="top-div">Get Your Rewards</h1>
          </p>
        </div>
      </div>

      <div>
        <Container className="mt-5 mb-3">
          <Row>
            <Col md={4}>
              <Card className="p-3 mb-2">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="icon">
                      <i className="bx bxl-mailchimp"></i>
                    </div>
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">Just For You</h6>
                      <span>1 day ago</span>
                    </div>
                  </div>
                  <div className="badge">
                    <Button variant="danger">- 1000 P</Button>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="heading">
                    Voucher - <br />
                    Regional Product
                  </h3>
                  <div className="c-details">
                    <p className="mb-0">
                      You can get a rebate with this voucher.
                    </p>
                  </div>
                  <div className="mt-5">
                    <ProgressBar variant="success" now={50} />
                    <div className="mt-3">
                      <span className="text1">
                        32 Applied <span className="text2">of 50 capacity</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-3 mb-2">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="icon">
                      <i className="bx bxl-dribbble"></i>
                    </div>
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">Tree matters</h6>
                      <span>4 days ago</span>
                    </div>
                  </div>
                  <div className="badge">
                    <Button variant="warning">- 1000 P</Button>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="heading">
                    Donate - <br />
                    Planting Project
                  </h3>

                  <div className="c-details">
                    <p className="mb-0">Let's plant a tree together.</p>
                  </div>

                  <div className="mt-5">
                    <ProgressBar variant="info" now={50} />
                    <div className="mt-3">
                      <span className="text1">
                        42 Applied <span className="text2">of 70 capacity</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-3 mb-2">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="icon">
                      <i className="bx bxl-reddit"></i>
                    </div>
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">Hessen Tomaten 🍅</h6>
                      <span>2 days ago</span>
                    </div>
                  </div>
                  <div className="badge">
                    <Button variant="success">- 1000 P</Button>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="heading">
                    Exchange - <br />
                    Eine Tomate 🍅
                  </h3>

                  <div className="c-details">
                    <p className="mb-0">Delicious Tomato for you</p>
                  </div>
                  <div className="mt-5">
                    <ProgressBar variant="warning" now={50} />
                    <div className="mt-3">
                      <span className="text1">
                        52 Applied{" "}
                        <span className="text2">of 100 capacity</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default RewardTemplate;
