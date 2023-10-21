import React from "react";
import NavigationBar from "./NavigationBar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./profile/Profile";
import ChallengePage from "./challengePage/ChallengePage";
import RewardsPage from "./rewardsPage/RewardsPage";
import LoginForm from "./loginForm/LoginForm";
import KwhToCO2Calculator from "./KwhToCO2Calculator";
import ChallengeQuizzes from "./challengePage/ChallengeQuizzes";
import LeaderBoard from "./challengePage/LeaderBoard";
import IntroNotification from "./introNotification";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/challenges" element={<ChallengePage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/calculator" element={<KwhToCO2Calculator />} />
          <Route path="/quiz" element={<ChallengeQuizzes />} />
          <Route path="/ranking" element={<LeaderBoard />} />
            <Route path="/notify" element={<IntroNotification />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
