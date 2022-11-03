import { useState } from "react";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
/* import Count from "./components/Count"; */
import  More  from "./components/More/More";
import CV from "./CV/CV";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGraduationCap, faBriefcase, faFolderOpen, faGear} from '@fortawesome/free-solid-svg-icons';


const { hero, education, experience, projects, languages, habilities} = CV;

function App() {
  const [changeOption, setChangeOption] = useState("Education");
  return (
    <div className="App">
      <Hero hero={hero} />
      <About metadata={hero.aboutMe} />
      <div>
        <div className='more'>
            <button className="btn-4" onClick={() => setChangeOption("Education")}> <FontAwesomeIcon className="icon" icon={faGraduationCap} /> Education</button>
            <button className="btn-4" onClick={() => setChangeOption("Experience")}><FontAwesomeIcon className="icon" icon={faBriefcase} /> Experience</button>
            <button className="btn-4" onClick={() => setChangeOption("Projects")}><FontAwesomeIcon className="icon" icon={faGear} /> Projects</button>
            <button className="btn-4" onClick={() => setChangeOption("More")}><FontAwesomeIcon className="icon" icon={faFolderOpen} /> More</button>
        </div>

        {changeOption === "Education" ? <Education education={ education }/> 
        : changeOption === "Experience" ? <Experience experience={ experience }/> 
        : changeOption === "Projects" ? <Projects projects={ projects }/> 
        : <More metadata={ languages } habilitie={habilities}/>}

      </div>

    </div>
  );
};

export default App;
