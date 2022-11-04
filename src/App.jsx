import { useState } from "react";
import "./App.scss";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import  More  from "./components/More/More";
import Contact from "./components/Contact/Contact";
import Habilities from "./components/Habilities/Habilities";
import CV from "./CV/CV";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGraduationCap, faBriefcase, faFolderOpen, faGear} from '@fortawesome/free-solid-svg-icons';

const { hero, education, experience, projects, languages, habilities} = CV;

function App() {
  const [Options, changeOption] = useState("Education");
  return (
    <div className="App">
      <Hero hero={hero} />
      <About metadata={hero.aboutMe} />
      <Habilities habilities={habilities}/>
      <div>
        <div className='more'>
            <button className="btn-4" onClick={() => changeOption("Education")}> <FontAwesomeIcon className="icon" icon={faGraduationCap} /> Education</button>
            <button className="btn-4" onClick={() => changeOption("Experience")}><FontAwesomeIcon className="icon" icon={faBriefcase} /> Experience</button>
            <button className="btn-4" onClick={() => changeOption("Projects")}><FontAwesomeIcon className="icon" icon={faGear} /> Projects</button>
            <button className="btn-4" onClick={() => changeOption("More")}><FontAwesomeIcon className="icon" icon={faFolderOpen} /> More</button>
        </div>

        {Options === "Education" ? <Education education={ education }/> : 
        Options === "Experience" ? <Experience experience={ experience }/> : 
        Options === "Projects" ? <Projects projects={ projects }/> : 
        <More metadata={ languages }/>}
      <Contact/>
      </div>

    </div>
  );
};

export default App;
