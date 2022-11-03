import React from 'react';
import "./Hero.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelopeOpen, faLocationDot, faCalendarDays, faCodeBranch} from '@fortawesome/free-solid-svg-icons';


const Hero = ({hero}) => {
  return (
    
    <div>
      <h1 className="myname">{hero.name}</h1>
        <div className='hero'>
        <div className='img'>
          <img className='logo' src={hero.image} alt="" />
        </div>
        <div className="card-hero">
        {/* <h1 className="myname">{hero.name}</h1> */}
          <h4>{hero.about}</h4>
          <p><FontAwesomeIcon className='icons' icon={faLocationDot} /> {hero.city} </p>
          <p><FontAwesomeIcon className='icons' icon={faCalendarDays}/> {hero.birthDate}</p>
          <p> <FontAwesomeIcon className='icons' icon={faEnvelopeOpen} /><a href={"mailto:" + hero.email}> javiazagra12@gmail.com</a></p>
          <p> <a href={hero.gitHub} rel="noreferrer" target="_blank"><FontAwesomeIcon className='icons' icon={faCodeBranch} /> GitHub</a></p>
        </div>
      </div>
      {/* <div class="line"></div> */}
    </div>
  )
}

export default Hero
