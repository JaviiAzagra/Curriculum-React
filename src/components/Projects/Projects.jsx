import React from "react";
import "./Projects.scss"

const Projects = ({ projects }) => {
  return (
    <div>
        <h1>[ Projects ]</h1>
      <div className="projects projects-card">
        {projects.map((item) => {
          return (
            <div className="card-projects"> 
                <div className="card" key={JSON.stringify(item)}>
                <h1 className="name">{item.name}</h1>
                <img src={item.img} alt=""/>
                <div className="links" key={JSON.stringify(item)}>
                    <a href={item.url} rel="noreferrer" target="_blank">Web</a>
                    <a href={item.github} rel="noreferrer" target="_blank">GitHub</a>
                </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
