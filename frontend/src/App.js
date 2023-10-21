import React from "react";
import NavigationBar from "./NavigationBar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import CardTemplate from "./cardTemplate/CardTemplate";
import Profile from "./profile/Profile";
import RewardTemplate from "./rewardTemplate/RewardTemplate";
import ChallengePage from "./challengePage/ChallengePage";
import RewardsPage from "./rewardsPage/RewardsPage";

const App = () => {
  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/challenges" element={<ChallengePage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/card" element={<CardTemplate />} />
          <Route path="/reward" element={<RewardTemplate />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
