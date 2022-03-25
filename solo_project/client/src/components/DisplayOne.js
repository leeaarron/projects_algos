import { navigate } from '@reach/router';
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
        <div className="container">
            <h1 className="goals-header">{goalData.title}</h1>
            <div className="display-one-box">
                <p className="display-data">Goal Type: {goalData.type}</p>
                <p className="display-data">Projected Complete Date: {goalData.completeDate}</p>
                <p className="display-data">Tasks to acheive goal:</p>
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
        </div>
    );

};

export default DisplayOne;