import React, { useState } from "react";
import VisionForm from "../components/VisionForm";
import DisplayVisions from "../components/VisionDisplay";

const Main = (props) => {
    const [visionList, setVisionList] = useState([]);

    return (
        <div>
            <VisionForm
                visionList={visionList}
                setVisionList={setVisionList}
            />
            <DisplayVisions
                visionList={visionList}
                setVisionList={setVisionList}
            />
        </div>
    );
};

export default Main;