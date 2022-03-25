import { useEffect } from "react";
import axios from "axios";


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
        <div className="container">
            <h2>Inspiration</h2>
            <div className="visions-container">
                {visionList.map((vision, index) => (
                    <div className="vision-board-box" key={index}>
                        <img style={{ height: "135px" }} src={`${vision.visionImgUrl}`} />
                    </div>
                )
                )}
            </div>
        </div>
    );
};

export default DisplayVisions;