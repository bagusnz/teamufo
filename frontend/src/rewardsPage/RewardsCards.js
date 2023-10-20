import React, { useState } from "react";
import { rewards } from "../mockDatei/rewards";
import RewardCard from "./RewardCard";
import { users } from "../mockDatei/users";

const RewardsCards = () => {
  const [points, setPoints] = useState(users[0].points);
  return (
    <>
      <h3>My Points: {points}</h3>
      {rewards.map((reward) => (
        <RewardCard key={reward.id} reward={reward} />
      ))}
    </>
  );
};

export default RewardsCards;
