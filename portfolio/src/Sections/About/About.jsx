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
                        I am a fourth year Computer Systems Engineering student at <span className="bold-primary">Carleton University.&nbsp;</span>
                        As an aspiring Computer Systems Engineer with <span className="bold-primary">7 years of programming experience,&nbsp;</span> 
                        I excel with solving problems, and taking on new challenges. 
                        I have worked with various programming languages such as
                        <span className="bold-secondary">&nbsp;Python, Java, JavaScript, C, and C++.&nbsp;</span> Throughout my past 4 years at Carleton University, I have had
                        the opportunity to learn and work with many Computer Engineering concepts including but not limited to <span className="bold-primary">Object-Oriented Programming, 
                        Data Structures, Algorithms, Computer Architecture, Computer Communications, Network/ Software Security.</span> Some of the more ambitious projects I have worked on include, my 4th year Engineering Capstone
                        Project titled "A Machine Learning Based Video Player for Streaming Applications", and a sorting algorithm visualizer using <span className="bold-secondary">HTML, CSS and JavaScript.&nbsp;</span> I have also seen 
                        great success in my academic journey thus far. I have made the Dean's Honour List multiple years during the program, and I have been accepted in to the Accelerated Pathway Program which allows undergraduate students 
                        to take graduate level classes as part of the undergraduate degree.
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