import React from 'react'
import "./More.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightLong, faCircle} from '@fortawesome/free-solid-svg-icons';

const More = ({ metadata, habilitie }) => {
  return (
    <div className='box'>
      <div className='languages'>
        <h1>[ Idiomas ]</h1>
        {metadata.map((element) => {
          return <div className='languages-card' ey={JSON.stringify(element.language)}>
          <p>{element.language} <FontAwesomeIcon className="icon" icon={faRightLong} /></p>
          <p> {element.wrlevel} </p>
          </div>
        })}
      </div>

      <div className='habilities'>
        <h1>[ Habilities ]</h1>
        {habilitie.map((element) => {
          return <div className='habilities-card' ey={JSON.stringify(element)}>
          <p><FontAwesomeIcon className="circle" icon={faCircle} /> {element}</p>
          </div>
        })}
      </div>
    </div>
  );
};

export default More
