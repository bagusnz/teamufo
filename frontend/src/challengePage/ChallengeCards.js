import React, { useState } from "react";
import ChallengeCard from "./ChallengeCard";
import { users } from "../mockDatei/users";
import { challenges } from "../mockDatei/challenges";
import Container from "react-bootstrap/Container";

const ChallengeCards = () => {
  const [points, setPoints] = useState(users[0].points);

  return (
    <>
      <Container>
        <h3>My Points: {points}</h3>
        {challenges.map((challenge) => (
            <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                points={points}
                setPoints={setPoints}
            />
        ))}
      </Container>

    </>
  );
};

export default ChallengeCards;
