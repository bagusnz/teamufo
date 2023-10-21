import React from "react";

import ChallengeCards from "./ChallengeCards";
import PageBanner from "../PageBanner";

const ChallengePage = () => {
  return (
    <>
      <PageBanner title={"Do Your Challenges"} />
      <ChallengeCards />
    </>
  );
};

export default ChallengePage;
