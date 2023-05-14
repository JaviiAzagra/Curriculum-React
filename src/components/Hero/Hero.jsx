import React from "react";
import "./Hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faLocationDot,
  faCalendarDays,
  faCodeBranch,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

import pdf from "./JavierAzagraCV.pdf";

const Hero = ({ hero }) => {
  return (
    <div className="heroname" id="Home">
      <h1 className="myname">{hero.name}</h1>
      <div className="hero">
        <div className="hero--container">
          <div className="img">
            <img className="logo" src={hero.image} alt="" />
          </div>

          <div className="card-hero">
            <h4>{hero.about}</h4>
            <div className="info">
              <p>
                <FontAwesomeIcon className="icons" icon={faLocationDot} />{" "}
                {hero.city}{" "}
              </p>
              <p>
                <FontAwesomeIcon className="icons" icon={faCalendarDays} />{" "}
                {hero.birthDate}
              </p>
              <p>
                {" "}
                <FontAwesomeIcon className="icons" icon={faEnvelopeOpen} />
                <a href={"mailto:" + hero.email}> javiazagra12@gmail.com</a>
              </p>
              <p>
                {" "}
                <a href={hero.gitHub} rel="noreferrer" target="_blank">
                  <FontAwesomeIcon className="icons" icon={faCodeBranch} />{" "}
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cv">
        <a
          className="cv__btn"
          href={pdf}
          download="JavierAzagraCV.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon className="icons-cv" icon={faDownload} /> Download CV
        </a>
      </div>
    </div>
  );
};

export default Hero;
