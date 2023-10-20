import React, {useState} from 'react';

const ChallengeCard = ({challenge, points, setPoints}) => {
    //TODO: get userid from Cache? or from backend?
    const [todo, setTodo] = useState(false);

    const handleTodo = () => {
        todo ? setPoints(points - challenge.point) : setPoints(points + challenge.point);
       setTodo(!todo);
    }
    return (
        <div>
            <h2>{challenge.title}</h2>
            <h3>{`${challenge.point} Point(s)`}</h3>
            <button onClick={handleTodo}>
                {todo ? "to do" : "Done"}
            </button>
        </div>
    );
}

export default ChallengeCard;