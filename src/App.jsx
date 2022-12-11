import React, { Component } from "react";
import "./App.css";
import Education from "./components/Education";
import Header from "./components/Header";
import Objective from "./components/Objective";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Objective />
        <Education />
        <Skills />
        <Projects />
      </div>
    );
  }
}
