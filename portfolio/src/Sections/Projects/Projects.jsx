import React from "react";
import "./Projects.css";
import Project from "../../components/Project/Project";
import barChart from "../../svg/bar-chart.svg";
import squares from "../../svg/2048.svg";
import calculator from "../../svg/calculator.svg";

export default function Projects({section}) {
    if (section === "projects")
        return (
            <div className="projects-layout">
                <div className="title">Projects</div>
                <div className="projects-content">
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
                    <Project title="JavaScript Calculator" icon={calculator}
                        webLink="https://simple-calculator-georgepapoutsis.vercel.app/"
                        gitHubLink="https://github.com/George-Papoutsis/calculator">
                        <ul className="project-points">
                            <li>Developed a fully <span className="bold-secondary">responsive website</span> resulting in the calculator being easy to use on any screen size
                            </li>
                        </ul>
                    </Project>
                </div>
            </div>
        );
    return null;
}