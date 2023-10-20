import React from 'react';
import ChallengeCard from "./ChallengeCard";


const ChallengeCards = () => {
    const challenges = [
        { id: 1, title: "Challenge 1" },
        { id: 2, title: "Challenge 2" },
        { id: 3, title: "Challenge 3" }
    ];

    return (

        challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
        ))

    );
}

export default ChallengeCards;