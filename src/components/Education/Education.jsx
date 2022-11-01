import React from 'react'
import "./Education.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';

const Education = ({education}) => {
  return (
    <div>
      <div className="education education-card">
      <h1>Educacion</h1>
        {education.map((item) => {
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

export default Education