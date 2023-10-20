import React, {useState} from 'react';

const ChallengeCard = ({challenge}) => {
    const [todo, setTodo] = useState(false);
    return (
        <div>
            <h2>{challenge.title}</h2>
            <h3>{challenge.point}</h3>
            <button onClick={() => setTodo(!todo)}>
                {todo ? "to do" : "Done"}
            </button>
        </div>
    );
}

export default ChallengeCard;