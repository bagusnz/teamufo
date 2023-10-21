import React, { useState } from "react";
import { rewards } from "../mockDatei/rewards";
import RewardsCard from "./RewardsCard";
import { users } from "../mockDatei/users";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const RewardsCards = () => {
  const [points, setPoints] = useState(users[0].points);
  return (
    <>
      <Container className="mt-5 mb-3">
        <h3>My Points: {points}</h3>
        <Row>
          {rewards.map((reward) => (
            <RewardsCard
              key={reward.id}
              reward={reward}
              points={points}
              setPoints={setPoints}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default RewardsCards;
