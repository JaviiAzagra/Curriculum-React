import React from "react";
import "./Projects.scss";

const Projects = ({ projects }) => {
  /* console.log(projects); */
  return (
    <div className="projects" id="Projects">
      <h1>[ Projects ]</h1>
      <div className="projects__box">
        {projects.map((item) => {
          return (
            <div className="projects__box--card" key={JSON.stringify(item)}>
              <a className="projects__box--card--img" href={item.url} rel="noreferrer" target="_blank"><img  src={item.img} alt={item.name} /></a>
              <a href={item.url} rel="noreferrer" target="_blank">{item.name}</a>
              <a href={item.github} rel="noreferrer" target="_blank">GitHub</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
