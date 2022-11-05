import React from "react";
import "./Projects.scss"

const Projects = ({ projects }) => {
  /* console.log(projects); */
  return (
    <div>
        <h1>[ Projects ]</h1>
      <div className="projects projects-card">
        {projects.map((item) => {
          return (
            <div key={JSON.stringify(item)} > 
                <div className="card">
                  <div className={item.name} ></div>
                    <div>
                    <a href={item.url} rel="noreferrer" target="_blank"><p>{item.name}</p></a>
                    </div>
                    <div>
                    <a href={item.github} rel="noreferrer" target="_blank"><p>GitHub</p></a>
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
