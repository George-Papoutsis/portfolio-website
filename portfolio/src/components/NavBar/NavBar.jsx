import React from "react";
import "./NavBar.css";
import hamburger from "../../svg/menu-hamburger.svg";
import close from "../../svg/cross.svg";
import { useState } from "react";

export default function NavBar({section, updateSection}) {
    const [showMenu, setMenu] = useState(false);

    function manageMenu() {
        setMenu(!showMenu);
        document.getElementsByClassName("App")[0].classList.toggle("no-scroll");
    }

    return (
        <>
            <div className="nav-bar-container">
                <div className="nav-name">
                    George Papoutsis
                </div>
                <div id="toggle-button" className="toggle-button">
                    <img className={!showMenu ? "hamburger" : "hidden"} src={hamburger} onClick={() => manageMenu()}/>
                    <img className={showMenu ? "close-menu" : "hidden"} src={close} onClick={() => manageMenu()}/>
                </div>
                <div className="nav-options">
                    <span className= {section === "home" ? "option selected" : "option"}
                        onClick={() => updateSection("home")}>
                        Home
                    </span>
                    <span className= {section === "about" ? "option selected" : "option"}
                        onClick={() => updateSection("about")}>
                        About
                    </span>
                    <span className= {section === "skills" ? "option selected" : "option"}
                        onClick={() => updateSection("skills")}>
                        Skills
                    </span>
                    <span className= {section === "experience" ? "option selected" : "option"}
                        onClick={() => updateSection("experience")}>
                        Experience
                    </span>
                    <span className= {section === "projects" ? "option selected" : "option"}
                        onClick={() => updateSection("projects")}>
                        Projects
                    </span>
                </div>
            </div>
            <div className= {showMenu ? "nav-options-mobile" : "hidden"}>
                <span className= {section === "home" ? "option selected" : "option"}
                    onClick={() => {manageMenu(); updateSection("home");}}>
                    Home
                </span>
                <span className= {section === "about" ? "option selected" : "option"}
                    onClick={() => {manageMenu(); updateSection("about");}}>
                    About
                </span>
                <span className= {section === "skills" ? "option selected" : "option"}
                    onClick={() => {manageMenu(); updateSection("skills");}}>
                    Skills
                </span>
                <span className= {section === "experience" ? "option selected" : "option"}
                    onClick={() => {manageMenu(); updateSection("experience");}}>
                    Experience
                </span>
                <span className= {section === "projects" ? "option selected" : "option"}
                    onClick={() => {manageMenu(); updateSection("projects");}}>
                    Projects
                </span>
            </div>
        </>
    );
}