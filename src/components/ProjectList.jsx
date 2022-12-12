import React from "react";

const ProjectList = ({ project }) => {
  return (
    <div className="projectList">
      <div className={project.direction}>
        <h3>{project.title}</h3>
        <ul>
          {project.about.map((list, id) => (
            <div key={id}>
              <li>{list}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectList;
