import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Modal from "react-bootstrap/Modal";

const RewardsCard = ({ reward, user, setPoints }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleCost = () => {
    if (isUserLoggedIn) {
      setShow(true);
    }
  };

  const isUserLoggedIn = user !== null;
  const isAffordable = user.carbon_credits >= reward.carbon_credit_cost;
  const isRewardAvailable = reward.available_quantity > 0;

  const handleBuy = () => {
    handleClose();
    if (user) {
      user.carbon_credits = user.carbon_credits - reward.carbon_credit_cost;
      setPoints(user.carbon_credits);
    }
  };

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
            <Button
              variant="danger"
              onClick={handleCost}
              disabled={!isRewardAvailable && isUserLoggedIn}
            >
              - {reward.carbon_credit_cost} P
            </Button>
            <Modal show={show} onHide={handleClose} animation centered>
              <Modal.Header closeButton>
                <Modal.Title>{reward.name}</Modal.Title>
              </Modal.Header>
              {isAffordable ? (
                <Modal.Body>
                  It is priced at <b>{reward.carbon_credit_cost}</b> points. Are
                  you sure you want to buy it?
                </Modal.Body>
              ) : (
                <Modal.Body>
                  Your points are insufficient to place an order for the desired
                  product.
                </Modal.Body>
              )}
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={handleBuy}
                  disabled={!isAffordable}
                >
                  Buy
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="heading">{reward.name}</h3>
          <div className="c-details">
            <p className="mb-0">{reward.description}</p>
          </div>
          <div className="mt-5">
            <ProgressBar variant="success" now={50} />
            <div className="mt-3">
              <span className="text1">
                {reward.available_quantity} Applied{" "}
                <span className="text2">
                  of {reward.available_quantity * 2} capacity
                </span>
              </span>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default RewardsCard;
