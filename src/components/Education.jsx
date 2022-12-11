import React, { Component } from "react";
import EducationInfo from "../data/education";
import EducationList from "./EducationList";

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = EducationInfo;
  }
  render() {
    return (
      <div className="education">
        <h2>Education</h2>
        {this.state.map((education, id) => (
          <EducationList education={education} key={id} />
        ))}
      </div>
    );
  }
}
