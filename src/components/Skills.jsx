import React, { Component } from "react";
import SkillsInfo from "../data/skillsInfo";
import SkillList from "./SkillList";

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = SkillsInfo;
  }
  render() {
    return (
      <div className="skills">
        <h2>Skills</h2>
        <div className="skillset">
          {this.state.map((skill, id) => (
            <SkillList key={id} skill={skill} />
          ))}
        </div>
      </div>
    );
  }
}
