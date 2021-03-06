import { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

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
            });
    };

    return (
        <div className="container">
            <h1 className="goals-header">Vision Board</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h3 className="inspo-form-header">Add New Inspiration:</h3>
                <div>
                    <label htmlFor="imgUrl">IMG URL</label>
                    <input
                        type="text"
                        id="imgUrl"
                        value={visionImgUrl}
                        onChange={(e) => setVisionImgUrl(e.target.value)}
                    />
                </div>
                <button type="submit">Add Image</button>
            </form>
        </div>
    );
};

export default VisionForm;