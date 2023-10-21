import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ChallengeCard = ({ challenge, points, setPoints }) => {
  //TODO: get userid from Cache? or from backend?
  const [todo, setTodo] = useState(false);

  const handleTodo = () => {
    todo
      ? setPoints(points - challenge.carboncredit)
      : setPoints(points + challenge.carboncredit);
    setTodo(!todo);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" alt="Images" />
      <Card.Body>
        <Card.Title>{challenge.title}</Card.Title>
        <Card.Text>{challenge.description}</Card.Text>
        <Card.Text>{`${challenge.carboncredit} Point(s)`}</Card.Text>
        <Button variant="outline-primary" onClick={handleTodo}>
          {todo ? "to do" : "Done"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ChallengeCard;
