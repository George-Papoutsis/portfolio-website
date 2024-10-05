import React from "react";
import "./SkillSection.css";
import { useState } from "react";
import arrowUp from "../../svg/arrow-up.svg";
import arrowDown from "../../svg/arrow-down.svg";

export default function SkillSection({ title, children }) {
    const [showSection, setSection] = useState(true);

    function manageSection() {
        setSection(!showSection);
    }

    return (
        <div className="skills-section">
            <div className="skills-section-title" onClick={() => manageSection()} >
                {title}
                <img className={showSection ? "hidden" : ""} src={arrowUp} alt="close" />
                <img className={showSection ? "" : "hidden"} src={arrowDown} alt="open" />
            </div>
            <div className={showSection ? "skills-section-content show-skill-section" : "skills-section-content"}>
                {children}
            </div>
        </div>
    );
}