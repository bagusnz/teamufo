import React, { useEffect, useState } from "react";
import ChallengeCard from "./ChallengeCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import UserPointInfo from "./UserPointInfo";
import { readChallenges } from "services/crud/ChallengeCRUD";
import { useUser } from "services/userContext";

const ChallengeCards = () => {
  const user = useUser();
  const [points, setPoints] = useState(user ? user.carbon_credits : 0);
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    async function fetchChallenges() {
      const challengesData = await readChallenges();
      setChallenges(challengesData);
    }

    fetchChallenges();
  }, []);

  return (
    <>
      <Container>
        <UserPointInfo user={user} />
        <Row>
          {challenges.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              challenge={challenge}
              user={user}
              setPoints={setPoints}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ChallengeCards;
