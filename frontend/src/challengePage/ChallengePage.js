import React from "react";

import ChallengeCards from "./ChallengeCards";
import ChallengeBanner from "./ChallengeBanner";
import LeaderBoard from "../cardTemplate/LeaderBoard";

const ChallengePage = () => {
  return (
    <>
      <ChallengeBanner />
      <ChallengeCards />
      <LeaderBoard />
    </>
  );
};

export default ChallengePage;
