import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

const RewardsCard = ({ reward }) => {
  return (
    <Col md={4}>
      <Card className="p-3 mb-4">
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
            <Button variant="danger">- {reward.cost} P</Button>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="heading">
            Boucher - <br />
            {reward.name}
          </h3>
          <div className="c-details">
            <p className="mb-0">You can get a rebate with this boucher.</p>
          </div>
          <div className="mt-5">
            <ProgressBar variant="success" now={50} />
            <div className="mt-3">
              <span className="text1">
                {reward.quantity} Applied{" "}
                <span className="text2">of 50 capacity</span>
              </span>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default RewardsCard;
