import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import Skills from "./Sections/Skills/Skills";
import Experience from "./Sections/Experience/Experience";
import Projects from "./Sections/Projects/Projects";
import { useState } from "react";

function App() {
  const [section, setSection] = useState("home");
  return (
    <div className="App">
      <NavBar section={section} updateSection={setSection}></NavBar>
      <Home section={section}></Home>
      <About section={section}></About>
      <Skills section={section}></Skills>
      <Experience section={section}></Experience>
      <Projects section={section}></Projects>
    </div>
  );
}

export default App;
