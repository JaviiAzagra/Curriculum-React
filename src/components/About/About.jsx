import React from "react";
import "./About.css";

const About = ({ metadata }) => {
  return (
    <div>
      <h2>About</h2>
      {metadata.map((element) => {
        return <h4 key={JSON.stringify(element.info)}>{element.info}</h4>;
      })}
    </div>
  );
};

export default About;
