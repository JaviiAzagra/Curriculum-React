import React from 'react'
import { useState } from "react";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import  More  from "../More/More";
import CV from "../../CV/CV";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGraduationCap, faBriefcase, faFolderOpen} from '@fortawesome/free-solid-svg-icons';

const {education, experience, languages} = CV;

const Buttons = () => {
    const [Options, changeOption] = useState("Education");
  return (
    <div className='buttons' id='Buttons'>
        <div className='more'>
            <button className="btn" onClick={() => changeOption("Education")}> <FontAwesomeIcon className="icon" icon={faGraduationCap} /> Education</button>
            <button className="btn" onClick={() => changeOption("Experience")}><FontAwesomeIcon className="icon" icon={faBriefcase} /> Experience</button>
            <button className="btn" onClick={() => changeOption("More")}><FontAwesomeIcon className="icon" icon={faFolderOpen} /> More</button>
        </div>

        {Options === "Education" ? <Education education={ education }/> : 
        Options === "Experience" ? <Experience experience={ experience }/> : 
        <More props={ languages }/>}
      </div>
  )
}

export default Buttons