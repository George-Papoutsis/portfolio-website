import React from "react";
import "./About.css"
import Profile from "../../components/Profile/Profile";

export default function About({section}) {
    if (section === "about") {
        return (
            <div className="about-layout">
                <div className="about-content">
                    <div className="title">About</div>
                    <div className="about-info">
                        I am a third year Computer Engineering student at <span className="bold-primary">Carleton University&nbsp;</span> 
                        enrolled in the Co-op program.
                        As an aspiring web developer with <span className="bold-primary">6 years of programming experience,&nbsp;</span> 
                        I excel with solving problems, and taking on new challenges. 
                        I have worked with various programming languages such as
                        <span className="bold-secondary">&nbsp;Python, Java, JavaScript, and C.&nbsp;</span> During my past 3 years at Carleton University, I have had
                        the opportunity to learn and work with many 
                        programming concepts including but not limited to <span className="bold-primary">Object-Oriented Programming, 
                        Data Structures, Algorithms, and Design Patterns&nbsp;</span>including Model View Controller and
                        Observer. <br /><br />Some of the more ambitious projects I have worked on include, 
                        a sorting algorithm visualizer using <span className="bold-secondary">HTML, CSS and JavaScript.&nbsp;</span> 
                        As well as a re-creation of the video game 2048 made using <span className="bold-primary">HTML, Sass/CSS, and JavaScript.&nbsp;</span>
                        <br /><br />I am a results-oriented self-starter with strong interpersonal skills who enjoys 
                        a challenging environment.
                    </div>
                </div>
                <Profile></Profile>
            </div>
        );
    }
    return null;
}