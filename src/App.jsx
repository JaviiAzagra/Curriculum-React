import { useState } from "react";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
/* import Count from "./components/Count"; */
/* import  More  from "./components/More/More"; */
import CV from "./CV/CV";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGraduationCap, faBriefcase, faFolderOpen} from '@fortawesome/free-solid-svg-icons';


const { hero, education, experience, projects /* , languages, habilities, volunteer */ } =
  CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Hero hero={hero} />
      <About metadata={hero.aboutMe} />
      <div className="more">
          <button className="btn-4" onClick={() => setShowEducation(true)}> <FontAwesomeIcon className="icon" icon={faGraduationCap} /> Education </button>
          <button className="btn-4" onClick={() => setShowEducation(false)}> <FontAwesomeIcon className="icon" icon={faBriefcase} /> Experience </button>
          <button className="btn-4" onClick={() => setShowEducation(false)}> <FontAwesomeIcon className="icon" icon={faFolderOpen} /> More </button>
      </div>      
      <div>
          {showEducation ? 
          (<Education education={education} />) : 
          (<Experience experience={experience} />) 
          }
      </div>
      <Projects projects={projects}/>
    </div>
  );
};

export default App;
