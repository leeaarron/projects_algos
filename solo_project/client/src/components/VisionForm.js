import { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";

const VisionForm = (props) => {
    const { visionList, setVisionList } = props;
    const [visionImgUrl, setVisionImgUrl] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/visions", {
                visionImgUrl,
            })
            .then((response) => {
                console.log("Success");
                console.log(response);
                setVisionList([...visionList, response.data]);
                setVisionImgUrl("");
                navigate("/visions");
            })
            .catch((err) => {
                console.log("Error");
                console.log(err.response.data.err.errors);
                // setErrors(err.response.data.err.errors);
            });
    };

    return (
        <div>
            <h1>Vision Board</h1>
            <Link to="/">dashboard</Link>
            <h3>Add New Inspiration:</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="imgUrl">IMG URL</label>
                    <input
                        type="text"
                        id="imgUrl"
                        onChange={(e) => setVisionImgUrl(e.target.value)}
                    />
                </div>
                <button type="submit">Add Image</button>
            </form>
            <br></br>
            <hr></hr>
            <br></br>
        </div>
    );
};

export default VisionForm;