import { useState } from "react";

const RenderedPage = (props) => {
    const title = props.title;
    const explanation = props.explanation;
    const date = props.date;
    const imgUrl = props.hdurl;

    const [showInfo, setShowInfo] = useState(false);

    const handleInfoToggle = () => {
        setShowInfo(!showInfo);
    }

    const handleCloseClick = () => {
        setShowInfo(false);
    }
    return (
        <>
            <img src={imgUrl} />
            <div id="InfoBar">
            <h3>APOD Project</h3>
            <h2>{title}</h2>
            <button onClick={handleInfoToggle}>Info</button>
            </div>
        {showInfo && (
            <div id="InfoContainer">
                <div id="ContainerImage" onClick={handleCloseClick}><img src={imgUrl} /></div>
                <div id="BlueBox">
                    <h2>{title}</h2>
                    <h3>{date}</h3>
                    <p>{explanation}</p>
                    <button onClick={handleCloseClick}>Close</button>
                </div>
            </div>
        )}
        </>
    );
};

export default RenderedPage;