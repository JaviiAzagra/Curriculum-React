import React from 'react'
import "./Experience.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';

const Experience = ({experience}) => {
  return (
    <div>
      <div className="experience experience-card">
      <h1>Experience</h1>
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name"><FontAwesomeIcon className="circle" icon={faCaretRight} /> {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Experience