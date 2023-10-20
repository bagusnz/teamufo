import React from 'react';
import ChallengeCard from "./ChallengeCard";


const ChallengeCards = () => {
    const challenges = [
        { id: 1, title: "Challenge 1", point: 10},
        { id: 2, title: "Challenge 2", point: 5 },
        { id: 3, title: "Challenge 3", point: 15}
    ];

    return (

        challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
        ))

    );
}

export default ChallengeCards;