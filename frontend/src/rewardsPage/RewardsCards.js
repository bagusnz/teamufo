import React, { useEffect, useState } from "react";
import RewardsCard from "./RewardsCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { readRewards } from "services/crud/RewardCRUD";
import { useUser } from "services/userContext";
import UserPointInfoForRewards from "./UserPointInfoForRewards";

const RewardsCards = () => {
  const user = useUser();
  const [points, setPoints] = useState(user ? user.carbon_credits : 0);
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    async function fetchRewards() {
      const rewardsData = await readRewards();
      setRewards(rewardsData);
    }

    fetchRewards();
  }, []);

  return (
    <>
      <Container className="mt-5 mb-3">
        <UserPointInfoForRewards user={user} />
        <Row>
          {rewards.map((reward) => (
            <RewardsCard
              key={reward.reward_id}
              reward={reward}
              user={user}
              setPoints={setPoints}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default RewardsCards;
