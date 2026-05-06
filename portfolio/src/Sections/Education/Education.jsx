import React from "react";
import "../Experience/Experience.css"
import calendar from "../../svg/calendar.svg";
import location from "../../svg/location.svg";

export default function Education({section}) {
    if (section === "education") {
        return (
            <div className="experience-layout">
                <div className="title">Education</div>
                <div className="experience">
                    <hr />
                    <div className="experience-content">
                        <div className="experience-title">
                            <span className="experience-job">M.ASc Electrical and Computer Engineering&nbsp;</span>
                            <span className="experience-company">| Carleton University</span>
                        </div>
                        <div className="experience-extra">
                            <span className="experience-date">
                                <img className="experience-svg" src={calendar} />
                                Starting September 2026
                            </span>
                            <span className="experience-location">
                                <img className="experience-svg" src={location} />
                                Ottawa, On, Canada
                            </span>
                        </div>
                        <div className="experience-points">
                            <ul>
                                <li>Awarded a <span className="bold-primary">Research Assistant</span> position focusing on the <span className="bold-primary">coexistence between Wi-Fi, and Radar</span></li>
                                <li>Awarded a <span className="bold-primary">Teaching Assistant</span> position </li>
                                <li>Awarded <span className="bold-primary">entrance scholarship</span></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="experience-content">
                        <div className="experience-title">
                            <span className="experience-job">B.Eng Computer Systems Engineering&nbsp;</span>
                            <span className="experience-company">| Carleton University</span>
                        </div>
                        <div className="experience-extra">
                            <span className="experience-date">
                                <img className="experience-svg" src={calendar} />
                                September 2021 - May 2026
                            </span>
                            <span className="experience-location">
                                <img className="experience-svg" src={location} />
                                Ottawa, On, Canada
                            </span>
                        </div>
                        <div className="experience-points">
                            <ul>
                                <li>CGPA: <span className="bold-primary">10.73/12</span></li>
                                <li>Part of the <span className="bold-primary">Accelerated Pathway Program</span> which allows students to take graduate level courses in the undergraduate degree</li>
                                <li>Made the <span className="bold-primary">Dean's Honour List</span> Multiple years in the program</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        );
    }
    return null;
}