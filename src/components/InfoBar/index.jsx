import React from "react";
import "./InfoBar.css";
import closeIcon from "../../static/icons/closeIcon.png";
import onlineIcon from "../../static/icons/onlineIcon.png";

const InfoBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" alt="onlineIcon" src={onlineIcon} />
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="closeIcon" /></a>
            </div>
        </div>
    );
};
export default InfoBar;
