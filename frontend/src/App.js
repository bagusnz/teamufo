import React from "react";
import ChallengeCards from "./challengePage/ChallengeCards";
import NavigationBar from "./NavigationBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Test";
import RewardsCards from "./rewardsPage/RewardsCards";

const App = () => {
  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/challengeCards" element={<ChallengeCards />} />
          <Route path="/rewardsCards" element={<RewardsCards />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
