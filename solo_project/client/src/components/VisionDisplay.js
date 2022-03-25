import { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "@reach/router";
// import { navigate } from "@reach/router";


const DisplayVisions = (props) => {
    const { visionList, setVisionList } = props;

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/visions")
            .then((response) => {
                console.log(response.data);
                setVisionList(response.data);
            })
            .catch((err) => console.log(err.response));
    }, []);



    return (
        <div className="visions-container">
            <h2>Inspiration</h2>
            <div>
            {visionList.map((vision, index) => (
                    <div className="vision-board-box" key={index}>
                        <img style={{ height: "125px" }} src={`${vision.visionImgUrl}`} />
                    </div>
                )
            )}
            </div>
        </div>
    );
};

export default DisplayVisions;