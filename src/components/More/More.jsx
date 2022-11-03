import React from 'react'
import "./More.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightLong} from '@fortawesome/free-solid-svg-icons';

const More = ({ metadata}) => {
  return (
    <div className='box'>
      <div className='languages'>
        <h1>[ Languages ]</h1>
        {metadata.map((element) => {
          return <div className='languages-card' key={JSON.stringify(element.language)}>
          <p>{element.language} <FontAwesomeIcon className="icon" icon={faRightLong} /></p>
          <p> {element.wrlevel} </p>
          </div>
        })}
      </div>
    </div>
  );
};

export default More
