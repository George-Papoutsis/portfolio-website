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
                        I am a Master's student at <span className="bold-secondary">Carleton University</span> studying <span className="bold-secondary">Electrical and Computer Engineering.</span> 
                        <br />
                        As an aspiring Engineering Researcher with <span className="bold-secondary">7 years of programming experience,</span> I excel with solving problems, and taking on new challenges. 
                        During my undergraduate degree at Carleton University, I had the opportunity to learn and work with many Computer Engineering concepts including but not limited to Object-Oriented Programming, 
                        Data Structures, Algorithms, Computer Architecture, Computer Communications, and Network/ Software Security. 
                        Additionally, I have worked with various programming languages such as Python, Java, JavaScript, C, and C++.
                        <br/>
                        <br/>
                        Recently, my interests are in the field of <span className="bold-secondary">communications</span> where I have taken many elective courses in fundamental communication concepts such as <span className="bold-secondary">Wireless Communications, 
                        Communication Software, and 5G Networks.</span> This has led me to pursue a Masters of Applied Science in Electrical and Computer Engineering with research focusing on the <span className="bold-secondary">coexistence between Wi-Fi, and radar.</span>
                    </div>
                </div>
                <Profile></Profile>
            </div>
        );
    }
    return null;
}