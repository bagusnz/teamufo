import React from 'react';
import ChallengeCards from "./challengePage/ChallengeCards";
import NavigationBar from "./NavigationBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Test";

const App = () => {
    return (
        <>
            <NavigationBar />
            <BrowserRouter>
                <Routes>
                        <Route path="/challengeCards" element={<ChallengeCards />} />
                        <Route path="/test" element={<Test />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;