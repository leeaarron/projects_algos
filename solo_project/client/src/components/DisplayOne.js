import { Link, navigate } from '@reach/router';
import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

const DisplayOne = (props) => {
    const { id } = props;
    const [goalData, setGoalData] = useState({});
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/goal/${id}`)
            .then(response => {
                console.log(response);
                setGoalData(response.data);
            })
            .catch((err) => console.log(err.response));
    }, []);

    const handleGoalReached = (idFromBelow) => {
        axios
            .delete(`http://localhost:8000/api/goal/${idFromBelow}`)
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    return (
        <div>
            <h1>{goalData.title}</h1>
            <Link to={'/'}>Dashboard</Link>
            <p>Goal Type: {goalData.type}</p>
            <p>Projected Complete Date: {goalData.completeDate}</p>
            <p>Tasks to acheive goal:</p>
            <ul className="goal-task-list">
                <li>{goalData.taskOne}</li>
                <li>{goalData.taskTwo}</li>
                <li>{goalData.taskThree}</li>
                <li>{goalData.taskFour}</li>
                <li>{goalData.taskFive}</li>
            </ul>
            <button 
                onClick={() => navigate(`/edit/${goalData._id}`)}
            >Edit Goal</button>
            <button
                onClick={() => handleGoalReached(goalData._id)}
            >Goal Reached</button>
        </div>
    );

    };

export default DisplayOne;