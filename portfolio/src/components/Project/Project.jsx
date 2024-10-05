import React from "react";
import "./Project.css";
import globe from "../../svg/globe.svg";
import gitHub from "../../svg/github-primary.svg";

export default function Project({title, icon, webLink, gitHubLink, children}) {
    return (
        <div className="project">
            <div className="project-header">
                <img className="project-icon" src={icon} />
                <div className="project-title">{title} | </div>
                <div className="project-links">
                    <a href={webLink} target="_blank"><img className="project-icon" src={globe} alt="web link" /></a>
                    <a href={gitHubLink} target="_blank"><img className="project-icon" src={gitHub} alt="github link" /></a>
                </div>
            </div>
            <div className="project-body">{children}</div>
        </div>
    );
}