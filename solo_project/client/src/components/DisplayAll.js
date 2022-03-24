import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";

const DisplayAll = () => {
    const [goals, setGoals] = useState([]);
    const [deletedBoolean, setDeletedBoolean] = useState(false);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/goal")
            .then((response) => {
                console.log(response.data);
                setGoals(response.data);
            })
            .catch((err) => console.log(err.response));
    }, [deletedBoolean]);

    // const handleDeleteGoal = (idFromBelow) => {
    //     axios
    //         .delete(`http://localhost:8000/api/goal/${idFromBelow}`)
    //         .then((response) => {
    //             console.log(response);
    //             setDeletedBoolean(!deletedBoolean);
    //             // instead of dependancy array for deletedBoolean - filter out the object that was just deleted, new array of all the games besides the deleted one
    //             // const filteredPets = pets.filter((pet) => {
    //             //     return pet._id !== idFromBelow; 
    //             // }); 
    //             // setPets(filteredPets);
    //             // navigate("/"); //this would reload the page - but defeats purpose of live rendering with react
    //         })
    //         .catch((err) => {
    //             console.log(err.response);
    //         });
    // };

    return (
        <div className="container">
            <h1 className="goals-header">Goals</h1>
            <ul className="goals-list">
                {goals.map((goal) => {
                    return (
                        <li className="goal-list-item" key={goal._id}><Link to={`/goal/${goal._id}`}>{goal.title}</Link></li>
                    );
                })}
            </ul>
            <button
                onClick={() => navigate('/new-goal')}
            >Add New Goal</button>
            <Link to="/visions">Vision Board</Link>
        </div>
    );

};

export default DisplayAll;
