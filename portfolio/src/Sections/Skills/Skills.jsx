import React from "react";
import "./Skills.css";
import python from "../../images/python.png";
import c from "../../images/c.png";
import java from "../../images/java.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import sass from "../../images/sass.png";
import csharp from "../../images/csharp.png";
import sql from "../../images/sql.png";
import react from "../../images/react.png";
import vue from "../../images/vue.png";
import git from "../../images/git.png";
import node from "../../images/node.png";
import azuredevops from "../../images/azuredevops.png";
import bootstrap from "../../images/bootstrap.png";
import SkillSection from "../../components/SkillSection/SkillSection";

export default function Skills({section}) {
    if (section === "skills") {
        return (
            <div className="skills-layout">
                <div className="title">Skills</div>
                <div className="skills-content">
                    <SkillSection title="Languages">
                        <div className="skill">
                                <img className="skill-image" src={python} alt="python" />
                                <div className="skill-description">Python</div>
                            </div>
                            <div className="skill">
                                <img className="skill-image" src={c} alt="c" />
                                <div className="skill-description">C</div>
                            </div>
                            <div className="skill">
                                <img className="skill-image" src={java} alt="java" />
                                <div className="skill-description">Java</div>
                            </div>
                            <div className="skill">
                                <img className="skill-image" src={html} alt="html" />
                                <div className="skill-description">HTML</div>
                            </div>
                            <div className="skill">
                                <img className="skill-image" src={css} alt="css" />
                                <div className="skill-description">CSS</div>
                            </div>
                            <div className="skill">
                                <img className="skill-image" src={js} alt="js" />
                                <div className="skill-description">JS</div>
                            </div>
                            <div className="skill">
                                <img className="skill-image" src={sass} alt="sass" />
                                <div className="skill-description">Sass</div>
                            </div>
                            <div className="skill">
                                <img className="skill-image" src={csharp} alt="c sharp" />
                                <div className="skill-description">C Sharp</div>
                            </div>
                            <div className="skill">
                                <img className="skill-image" src={sql} alt="sql" />
                                <div className="skill-description">SQL</div>
                            </div>
                    </SkillSection>
                    <div className="skills-section-half">
                        <SkillSection title="Frameworks">
                            <div className="skill">
                                <img className="skill-image" src={react} alt="react" />
                                <div className="skill-description">React</div>
                            </div>
                            <div className="skill">
                                <img className="skill-image" src={vue} alt="vue" />
                                <div className="skill-description">Vue</div>
                            </div>
                            <div className="skill">
                                <img className="skill-image" src={bootstrap} alt="bootstrap" />
                                <div className="skill-description">Bootstrap</div>
                            </div>
                        </SkillSection>
                        <SkillSection title="Tools">
                            <div className="skill">
                                <img className="skill-image" src={git} alt="git" />
                                <div className="skill-description">Git</div>
                            </div>
                            <div className="skill">
                                <img className="skill-image" src={node} alt="node" />
                                <div className="skill-description">Node JS</div>
                            </div>
                            <div className="skill">
                                <img className="skill-image" src={azuredevops} alt="azure dev ops" />
                                <div className="skill-description">Azure DevOps</div>
                            </div>
                        </SkillSection>
                    </div>
                    <SkillSection title="Technical">
                        <div className="skill skill-no-image">
                            <div className="skill-description">Object-Oriented Programming</div>
                        </div>
                        <div className="skill skill-no-image">
                            <div className="skill-description">Computer Architecture</div>
                        </div>
                        <div className="skill skill-no-image">
                            <div className="skill-description">Design Patterns</div>
                        </div>
                        <div className="skill skill-no-image">
                            <div className="skill-description">Algorithms</div>
                        </div>
                        <div className="skill skill-no-image">
                            <div className="skill-description">Data Structures</div>
                        </div>
                        <div className="skill skill-no-image">
                            <div className="skill-description">Version Control</div>
                        </div>
                        <div className="skill skill-no-image">
                            <div className="skill-description">REST APIs</div>
                        </div>
                        <div className="skill skill-no-image">
                            <div className="skill-description">Agile Development</div>
                        </div>
                        <div className="skill skill-no-image">
                            <div className="skill-description">Linux</div>
                        </div>
                    </SkillSection>
                </div>
            </div>
        );
    }
    return null;
}