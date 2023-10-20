import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const RewardCard = ({ reward }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Header>{reward.name}</Card.Header>
        <Card.Body>
          <Card.Text>Cost: {reward.cost}</Card.Text>
          <Card.Text>Quantity: {reward.quantity}</Card.Text>
          <Button variant="outline-primary">Buy</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default RewardCard;
