import React from "react";
import "./Experience.css"
import calendar from "../../svg/calendar.svg";
import location from "../../svg/location.svg";

export default function Experience({section}) {
    if (section === "experience") {
        return (
            <div className="experience-layout">
                <div className="title">Experience</div>
                <div className="experiences">
                    <hr />
                    <div className="experience-content">
                        <div className="experience-title">
                            <span className="experience-job">Junior Full Stack Web Developer&nbsp;</span>
                            <span className="experience-company">| Immigration, Refugees, Citizenship Canada</span>
                        </div>
                        <div className="experience-extra">
                            <span className="experience-date">
                                <img className="experience-svg" src={calendar} />
                                January 2024 - December 2024
                            </span>
                            <span className="experience-location">
                                <img className="experience-svg" src={location} />
                                Ottawa, On, Canada
                            </span>
                        </div>
                        <div className="experience-points">
                            <ul>
                                <li>Worked in an <span className="bold-primary">agile development</span> team using <span className="bold-primary">HTML, CSS, JavaScript, SQL, C Sharp, and Vue JS</span></li>
                                <li>Applied <span className="bold-primary">problem solving skills</span> to fix bugs in all parts of the codebase</li>
                                <li>Created and updated <span className="bold-primary">API Endpoints</span> to communicate with the application's <span className="bold-primary">database</span></li>
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