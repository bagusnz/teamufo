import React from "react";
import ChallengeCards from "./challengePage/ChallengeCards";
import NavigationBar from "./NavigationBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import RewardsCards from "./rewardsPage/RewardsCards";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardTemplate from "./cardTemplate/CardTemplate";


const App = () => {
  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/challengeCards" element={<ChallengeCards />} />
          <Route path="/rewardsCards" element={<RewardsCards />} />
          <Route path="/card" element={<CardTemplate />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
        <Footer />
    </>
  );
};

export default App;
