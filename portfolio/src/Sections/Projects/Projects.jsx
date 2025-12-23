import React from "react";
import "./Projects.css";
import Project from "../../components/Project/Project";
import barChart from "../../svg/bar-chart.svg";
import squares from "../../svg/2048.svg";
import AI from "../../svg/ai.svg";

export default function Projects({section}) {
    if (section === "projects")
        return (
            <div className="projects-layout">
                <div className="title">Projects</div>
                <div className="projects-content">
                    <Project title="A Machine Learning Based Video Player for Streaming Applications (Current)" icon={AI}
                        gitHubLink="https://github.com/7figs/SYSC-4907">
                        <ul className="project-points">
                            <li>Working on a team of 4 students, supervised by Professor Changcheng Huang for <span className="bold-secondary">4th year Engineering Capstone Project.</span></li>
                            <li>Applying knowledge learned inside and outside the classroom to create a video streaming application with a machine learning recommendation system.</li>
                            <li>Actively demonstrating team management, and leadership skills by keeping my team on track, and meeting all of our deadlines.</li>
                        </ul>
                    </Project>
                    <Project title="Sorting algorithm visualizer" icon={barChart}
                        webLink="https://algorithm-visualizer-georgepapoutsis.vercel.app/"
                        gitHubLink="https://github.com/George-Papoutsis/Algorithm-Visualizer">
                        <ul className="project-points">
                            <li>Demonstrated knowledge of <span className="bold-secondary">sorting algorithms</span> by designing an elegant and responsive algorithm visualizer
                            using <span className="bold-secondary">HTML, CSS, and JavaScript</span></li>
                            <li>Applied knowledge of <span className="bold-secondary">asynchronous programming</span> to add audio and visual features to the application</li>
                        </ul>
                    </Project>
                    <Project title="2048 Game" icon={squares}
                        webLink="https://2048-georgepapoutsis.vercel.app/"
                        gitHubLink="https://github.com/George-Papoutsis/2048">
                        <ul className="project-points">
                            <li>Applied Knowledge of <span className="bold-secondary">HTML, JavaScript, and Sass</span> to develop a fully responsive recreation of the video game
                            2048</li>
                            <li>Demonstrated knowledge of <span className="bold-secondary">JavaScript Event Listeners,</span> and <span className="bold-secondary">DOM Manipulation</span></li>
                        </ul>
                    </Project>
                </div>
            </div>
        );
    return null;
}