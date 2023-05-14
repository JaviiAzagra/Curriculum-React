import React from "react";
/* import {useState} from "react"; */
import "./About.scss";

const About = ({ metadata }) => {
  return (
    <div className="about" id="About">
      <div className="about-card">
        <h1>[ About Me ]</h1>
          {metadata.map((element) => {
            return <p className="about-p" key={JSON.stringify(element.info)}>{element.info}</p>;
          })}
      </div>
    </div>

  );
};
  
/* const About = ({ metadata }) => {
  const [showAbout, setShowAbout] = useState(true);
  return (
    <div>
      <button  className="btn btn-about" onClick = {() => setShowAbout(!showAbout)}>
        {showAbout ? "Ocultar About" : "Mostrar About"}</button>
    <div className="about">
      {showAbout
      ?
      <>
        <div className="about-card">
        <h1>[ About Me ]</h1>
          {metadata.map((element) => {
            return <p className="about-p" key={JSON.stringify(element.info)}>{element.info}</p>;
          })}
        </div>
      </>
        : <div>About esta oculto</div>
      }
    </div>
    </div>
  );
}; */

export default About;
