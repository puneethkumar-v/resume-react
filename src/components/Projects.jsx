import React, { Component } from "react";
import ProjectsInfo from "../data/projects";
import ProjectList from "./ProjectList";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = ProjectsInfo;
  }
  render() {
    return (
      <div className="projects">
        <h2>Projects</h2>
        {this.state.map((project) => (
          <ProjectList project={project} />
        ))}
      </div>
    );
  }
}
