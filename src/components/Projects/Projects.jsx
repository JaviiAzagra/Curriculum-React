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
            <div key={JSON.stringify(item)} className={item.name} > 
                <div className="card">
                {/* <h1 className="name">{item.name}</h1> */}
                {/* <div className="links">
                    <a href={item.url} rel="noreferrer" target="_blank">Web</a>
                    <a className="button" href={item.github} rel="noreferrer" target="_blank">GitHub</a>
                </div> */}
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
