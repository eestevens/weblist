import React, { Component } from "react";

import axios from "axios";

import MainScreen from "./components/MainScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainScreen/>
      </div>
    );
  }
}

export default App;
