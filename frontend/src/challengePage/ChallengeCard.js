import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Todo from '../img/To-do-list-cuate.png'
import { updateUser } from "services/crud/UserCRUD";

const ChallengeCard = ({ challenge, user, setPoints }) => {
  const [todo, setTodo] = useState(true);

  const handleTodo = async () => {
    if(todo){
      user.carbon_credits += + challenge.carbon_credits
    } else {
      user.carbon_credits -= challenge.carbon_credits
    }
    await updateUser(user.user_id, user);
    setPoints(user.carbon_credits)
    setTodo(!todo);
  };

  const categoryImages = {
    "Environmental": "https://firebasestorage.googleapis.com/v0/b/collabothon23fra-1257.appspot.com/o/environmental.jpg?alt=media&token=1479d546-04d4-432a-ad8d-2816adcfa6f2",
    "Health": "https://firebasestorage.googleapis.com/v0/b/collabothon23fra-1257.appspot.com/o/health.jpg?alt=media&token=b795456b-6192-4968-9811-003f06d524ef",
    "Wellness": "https://firebasestorage.googleapis.com/v0/b/collabothon23fra-1257.appspot.com/o/wellness.jpg?alt=media&token=5ef2547b-4f37-43bb-9a60-258c2916d947",
    "Fitness": "https://firebasestorage.googleapis.com/v0/b/collabothon23fra-1257.appspot.com/o/fitness.jpg?alt=media&token=354fe464-2113-4632-beec-84c17f5e70b2",
    "Community": "https://firebasestorage.googleapis.com/v0/b/collabothon23fra-1257.appspot.com/o/community.jpg?alt=media&token=6ceab60e-e00a-4ff1-b371-59d35121be42",
    "Personal Growth": "https://firebasestorage.googleapis.com/v0/b/collabothon23fra-1257.appspot.com/o/personal_growth.jpg?alt=media&token=a91f4d94-6a59-4177-9baf-be90423d51ac",
  };

  return (
    <Col sm={4}>
      <Card className="col-sm mb-4">
        <Card.Img
          // src={Todo}
          src={categoryImages[challenge.category]}
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
