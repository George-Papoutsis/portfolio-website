import React from "react";
import "./Home.css";
import linkedin from "../../svg/linkedin.svg";
import youtube from "../../svg/youtube.svg";
import github from "../../svg/github.svg";
import email from "../../svg/email.svg";
import Profile from "../../components/Profile/Profile";

export default function Home({section}) {
    if (section === "home") {
        return (
            <div className="home-layout">
                <div className="home-content">
                    <div className="greeting">Hi, My name is</div>
                    <div className="home-name">George Papoutsis</div>
                    <div className="occupation">Web Developer</div>
                    <div className="bio">I am a third year Computer Systems Engineering student at Carleton
                        University. I have 6 years of programming experience and enjoy
                        solving problems, and taking on new challenges.</div>
                    <div className="button-group">
                        <a href="https://www.linkedin.com/in/george-papoutsis-481674276/" target="_blank" className="connect-button">
                            <img className="svg" src={linkedin}></img>
                        </a>
                        <a href="mailto: papoutsisgc@gmail.com" className="connect-button">
                            <img className="svg" src={email}></img>
                        </a>
                        <a href="https://www.youtube.com/@George_Papoutsis_" target="_blank" className="connect-button">
                            <img className="svg" src={youtube}></img>
                        </a>
                        <a href="https://github.com/George-Papoutsis" target="_blank" className="connect-button">
                            <img className="svg" src={github}></img>
                        </a>
                    </div>
                    <a href="https://drive.google.com/file/d/1SOrvT-jzzrb5udBIbx2igNMwqdjahHxV/view?usp=sharing" target="_blank"><button className="resume-button">
                        View My Resume
                    </button></a>
                </div>
                <Profile></Profile>
            </div>
        );
    }
    return null;
}