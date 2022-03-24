import { Link, navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";
// import { updateGoal } from "../../../server/controllers/goal.controller";

const UpdateGoal = (props) => {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [completeDate, setCompleteDate] = useState("");
    const [taskOne, setTaskOne] = useState("");
    const [taskTwo, setTaskTwo] = useState("");
    const [taskThree, setTaskThree] = useState("");
    const [taskFour, setTaskFour] = useState("");
    const [taskFive, setTaskFive] = useState("");
    const [id, setId] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/goal/${props.id}`)
            .then((response) => {
                console.log(response);
                setTitle(response.data.title);
                setType(response.data.type);
                setCompleteDate(response.data.completeDate);
                setTaskOne(response.data.taskOne);
                setTaskTwo(response.data.taskTwo);
                setTaskThree(response.data.taskThree);
                setTaskFour(response.data.taskFour);
                setTaskFive(response.data.taskFive);
                setId(response.data._id);
            })
            .catch((err) => console.log(err.response));
    }, []);

    const handleUpdateGoal = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/goal/${id}`, {
                title,
                type,
                completeDate,
                taskOne,
                taskTwo,
                taskThree,
                taskFour,
                taskFive,
            })
            .then((response) => {
                console.log(response);
                navigate(`/`);
            })
            .catch((err) => 
                console.log(err.response)
            );
    };

    return (
        <div>
            <h1>Update Goal:</h1>
            <Link to="/">Back to dashboard</Link>
            <h3>{title}</h3>

            <form onSubmit={(e) => handleUpdateGoal(e)}>
                <div>
                    <label htmlFor="title">Goal:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                {errors.title ? <p>{errors.title.message}</p> : null}
                <div>
                    <label htmlFor="type">Goal Type:</label>
                    <select name=""
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}>
                        <option value="Career">Career</option>
                        <option value="Education">Education</option>
                        <option value="Financial">Financial</option>
                        <option value="Health/Fitness">Health/Fitness</option>
                        <option value="Personal">Personal</option>
                        <option value="Leisure/Fun">Leisure/Fun</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                {errors.type ? <p>{errors.type.message}</p> : null}
                <div>
                    <label htmlFor="completeDate">Projected Complete Date:</label>
                    <input
                        type="text"
                        id="completeDate"
                        value={completeDate}
                        onChange={(e) => setCompleteDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="taskOne">Tasks to acheive goal:</label>
                    <input
                        type="text"
                        id="taskOne"
                        defaultValue={taskOne}
                        onChange={(e) => setTaskOne(e.target.value)}
                    />
                </div>
                {errors.taskOne ? <p>{errors.taskOne.message}</p> : null}
                <div>
                    <label className="visually-hidden" htmlFor="taskTwo">Task Two</label>
                    <input
                        type="text"
                        id="taskTwo"
                        defaultValue={taskTwo}
                        onChange={(e) => setTaskTwo(e.target.value)}
                    />
                </div>
                <div>
                <label className="visually-hidden" htmlFor="taskThree">Task Three</label>
                    <input
                        type="text"
                        id="taskThree"
                        defaultValue={taskThree}
                        onChange={(e) => setTaskThree(e.target.value)}
                    />
                </div>
                <div>
                <label className="visually-hidden" htmlFor="taskFour">Task Four</label>
                    <input
                        type="text"
                        id="taskFour"
                        defaultValue={taskFour}
                        onChange={(e) => setTaskFour(e.target.value)}
                    />
                </div>
                <div>
                <label className="visually-hidden" htmlFor="taskFive">Task Five</label>
                    <input
                        type="text"
                        id="taskFive"
                        defaultValue={taskFive}
                        onChange={(e) => setTaskFive(e.target.value)}
                    />
                </div>



                <button type="submit">Update Goal</button>
                
            </form>

        </div>
    );
};
export default UpdateGoal;