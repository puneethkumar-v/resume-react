import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="name">
          <h1>PUNEETH KUMAR V</h1>
        </div>
        <div className="general-info">
          <address>
            #2452, Gavi Ranga, 3rd cross, T.Dasarahalli, Banglore-57
          </address>
          <p>7975886469</p>
          <p>pk.puni872@gmail.com</p>
          <p>
            Github: <a href="github.com/puneethkumar-v">puneethkumar-v</a>
          </p>
        </div>
      </div>
    );
  }
}
