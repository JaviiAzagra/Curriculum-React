import React from 'react'
import { useState } from "react";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import  More  from "../More/More";
import CV from "../../CV/CV";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGraduationCap, faBriefcase, faFolderOpen, faGear} from '@fortawesome/free-solid-svg-icons';

const {education, experience, projects, languages} = CV;

const Buttons = () => {
    const [Options, changeOption] = useState("Education");
  return (
    <div id='Buttons'>
        <div className='more'>
            <button className="btn" onClick={() => changeOption("Education")}> <FontAwesomeIcon className="icon" icon={faGraduationCap} /> Education</button>
            <button className="btn" onClick={() => changeOption("Experience")}><FontAwesomeIcon className="icon" icon={faBriefcase} /> Experience</button>
            <button className="btn" onClick={() => changeOption("Projects")}><FontAwesomeIcon className="icon" icon={faGear} /> Projects</button>
            <button className="btn" onClick={() => changeOption("More")}><FontAwesomeIcon className="icon" icon={faFolderOpen} /> More</button>
        </div>

        {Options === "Education" ? <Education education={ education }/> : 
        Options === "Experience" ? <Experience experience={ experience }/> : 
        Options === "Projects" ? <Projects projects={ projects }/> : 
        <More props={ languages }/>}
      </div>
  )
}

export default Buttons