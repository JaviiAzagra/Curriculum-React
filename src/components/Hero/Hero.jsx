import React from 'react';
import "./Hero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faLocationDot, faCalendar} from '@fortawesome/free-solid-svg-icons';


const Hero = ({hero}) => {
  return (
    <div className='hero'>
       <img src={hero.image} alt="" />
        <div className="card">
          <h1>{hero.name}</h1>
          <h4>{hero.about}</h4>
          <p><FontAwesomeIcon icon={faLocationDot} /> {hero.city} </p>
          <p><FontAwesomeIcon icon={faCalendar}/> {hero.birthDate}</p>
          <p> <FontAwesomeIcon icon={faEnvelope} /><a href={"mailto:" + hero.email}> javiazagra12@gmail.com</a></p>
          <p> <a href={hero.gitHub}>GitHub</a></p>
        </div>
    </div>
  )
}

export default Hero
