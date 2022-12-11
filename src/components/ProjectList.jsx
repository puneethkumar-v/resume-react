import React from "react";

const ProjectList = ({ project }) => {
  return (
    <div className="projectList">
      <div className={project.direction}>
        <h3>{project.title}</h3>
        <ul>
          {project.about.map((list) => (
            <>
              <li>{list}</li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectList;
