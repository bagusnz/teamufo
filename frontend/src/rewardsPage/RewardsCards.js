import React, { useState } from "react";
import { rewards } from "../mockDatei/rewards";
import RewardsCard from "./RewardsCard";
import { users } from "../mockDatei/users";

const RewardsCards = () => {
  const [points, setPoints] = useState(users[0].points);
  return (
    <>
      <h3>My Points: {points}</h3>
      {rewards.map((reward) => (
        <RewardsCard key={reward.id} reward={reward} />
      ))}
    </>
  );
};

export default RewardsCards;
