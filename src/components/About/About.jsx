import React from "react";
import "./About.scss";

const About = ({ metadata }) => {
  return (
    <div className="about">
      <div className="about-card">
      <h1>[ About Me ]</h1>
        {metadata.map((element) => {
          return <p className="about-p" key={JSON.stringify(element.info)}>{element.info}</p>;
        })}
      </div>
    </div>
  );
};

export default About;
