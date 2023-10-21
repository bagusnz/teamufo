import React, { useState } from "react";
import { rewards } from "../mockDatei/rewards";
import RewardsCard from "./RewardsCard";
import { users } from "../mockDatei/users";
import Container from "react-bootstrap/Container";

const RewardsCards = () => {
  const [points, setPoints] = useState(users[0].points);
  return (
    <>
      <Container>
        <h3>My Points: {points}</h3>
        {rewards.map((reward) => (
            <RewardsCard key={reward.id} reward={reward} />
        ))}
      </Container>

    </>
  );
};

export default RewardsCards;
