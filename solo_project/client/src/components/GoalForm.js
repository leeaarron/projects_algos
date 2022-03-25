import { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const GoalForm = () => {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [completeDate, setCompleteDate] = useState("");
    const [taskOne, setTaskOne] = useState("");
    const [taskTwo, setTaskTwo] = useState("");
    const [taskThree, setTaskThree] = useState("");
    const [taskFour, setTaskFour] = useState("");
    const [taskFive, setTaskFive] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/goal", {
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
                console.log("Success");
                console.log(response);
                navigate("/");
            })
            .catch((err) => {
                console.log("Error");
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };

    return (
        <div className="container">
            <h1 className="goals-header">Add a New Goal</h1>
            <span><Link to="/">Return to dashboard</Link></span>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-set">
                    <label htmlFor="title">Goal:</label>
                    <input
                        type="text"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                {errors.title ? <p className="error-message">{errors.title.message}</p> : null}
                <div className="form-set">
                    <label htmlFor="type">Goal Type:</label>
                    <select name=""
                        id="type"
                        onChange={(e) => setType(e.target.value)}>
                        <option>----------</option>
                        <option value="Career">Career</option>
                        <option value="Education">Education</option>
                        <option value="Financial">Financial</option>
                        <option value="Health/Fitness">Health/Fitness</option>
                        <option value="Personal">Personal</option>
                        <option value="Leisure/Fun">Leisure/Fun</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                {errors.type ? <p className="error-message">{errors.type.message}</p> : null}
                <div className="form-set">
                    <label htmlFor="completeDate">Projected Complete Date:</label>
                    <input
                        type="text"
                        id="completeDate"
                        onChange={(e) => setCompleteDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="taskOne">Tasks to acheive goal:</label>
                    <input
                        type="text"
                        id="taskOne"
                        onChange={(e) => setTaskOne(e.target.value)}
                    />
                </div>
                {errors.taskOne ? <p className="error-message">{errors.taskOne.message}</p> : null}
                <div>
                    <label className="visually-hidden" htmlFor="taskTwo">Task Two</label>
                    <input
                        type="text"
                        id="taskTwo"
                        placeholder="optional"
                        onChange={(e) => setTaskTwo(e.target.value)}
                    />
                </div>
                <div>
                <label className="visually-hidden" htmlFor="taskThree">Task Three</label>
                    <input
                        type="text"
                        id="taskThree"
                        placeholder="optional"
                        onChange={(e) => setTaskThree(e.target.value)}
                    />
                </div>
                <div>
                <label className="visually-hidden" htmlFor="taskFour">Task Four</label>
                    <input
                        type="text"
                        id="taskFour"
                        placeholder="optional"
                        onChange={(e) => setTaskFour(e.target.value)}
                    />
                </div>
                <div>
                <label className="visually-hidden" htmlFor="taskFive">Task Five</label>
                    <input
                        type="text"
                        id="taskFive"
                        placeholder="optional"
                        onChange={(e) => setTaskFive(e.target.value)}
                    />
                </div>



                <button type="submit">Create Goal</button>
            </form>
        </div>
    );
};

export default GoalForm;