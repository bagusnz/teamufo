import React, { useState } from "react";
import ChallengeCard from "./ChallengeCard";
import { users } from "../mockDatei/users";

const ChallengeCards = () => {
  const [points, setPoints] = useState(users[0].points);
  const challenges = [
    { id: 1, title: "Challenge 1", point: 10 },
    { id: 2, title: "Challenge 2", point: 5 },
    { id: 3, title: "Challenge 3", point: 15 },
  ];

  return (
    <>
      <h3>My Points: {points}</h3>
      {challenges.map((challenge) => (
        <ChallengeCard
          key={challenge.id}
          challenge={challenge}
          points={points}
          setPoints={setPoints}
        />
      ))}
    </>
  );
};

export default ChallengeCards;
