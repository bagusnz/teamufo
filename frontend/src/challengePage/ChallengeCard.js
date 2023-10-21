import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

const ChallengeCard = ({ challenge, points, setPoints }) => {
  //TODO: get userid from Cache? or from backend?
  const [todo, setTodo] = useState(true);

  const handleTodo = () => {
    todo
      ? setPoints(points + challenge.carbon_credits)
      : setPoints(points - challenge.carbon_credits);
    setTodo(!todo);
  };

  return (
    <Col sm={4}>
      <Card className="col-sm mb-4">
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
          <Card.Title>{challenge.title}</Card.Title>
          <div>
            <Badge bg="light" text="dark" className="mb-2 mr-2">
              {challenge.category}
            </Badge>
          </div>
          <Card.Text>{challenge.description}</Card.Text>
          {todo ? (
            <Button className="btn-success" onClick={handleTodo}>
              + {challenge.carbon_credits} P
            </Button>
          ) : (
            <Button className="btn-success" onClick={handleTodo} disabled>
              DONE
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ChallengeCard;
