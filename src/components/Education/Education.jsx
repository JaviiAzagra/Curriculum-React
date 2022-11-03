import React from 'react'
import "./Education.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCodeCommit} from '@fortawesome/free-solid-svg-icons';

const Education = ({education}) => {
  return (
    <div>
      <div className="education education-card">
      <h1>[ Education ]</h1>
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name"><FontAwesomeIcon className="icon" icon={faCodeCommit} /> {item.name}</p>
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