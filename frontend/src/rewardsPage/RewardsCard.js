import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

const RewardsCard = ({ reward, user, setPoints }) => {
  const handleCost = () => {
    if (user && user.carbon_credits >= reward.carbon_credit_cost) {
      handleBuy();
    } else {
      alert(
        "your points are insufficient to place an order for the desired product.",
      );
    }
  };

  const isRewardAvailable = reward.available_quantity > 0;

  const handleBuy = () => {
    if (user) {
      // console.log(user.carbon_credits)
      user.carbon_credits = user.carbon_credits - reward.carbon_credit_cost;
      setPoints(user.carbon_credits);
      // console.log(user.carbon_credits)
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
              disabled={!isRewardAvailable && !user}
            >
              - {reward.carbon_credit_cost} P
            </Button>
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
