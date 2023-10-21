import React, { useState } from "react";
import ChallengeCard from "./ChallengeCard";
import { users } from "../mockDatei/users";
import { challenges } from "../mockDatei/challenges";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ChallengeCards = () => {
  const [points, setPoints] = useState(users[0].points);

  return (
    <>
      <h3>My Points: {points}</h3>
      <Container>
        <Row>
          {challenges.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              challenge={challenge}
              points={points}
              setPoints={setPoints}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ChallengeCards;
