import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ObjectList from "./components/ObjectList";

const objects = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
  { id: 4, name: "Patricia Lebsack" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Contact Manager</h1>
        </header>

        <ObjectList objectItems={objects} />
      </div>
    );
  }
}

export default App;
