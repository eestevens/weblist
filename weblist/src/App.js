import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

import ObjectList from "./components/ObjectList";
import FilteredList from "./components/FilteredList";

class App extends Component {
  // default state object
  state = {
    objectItems: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        // create an array of contacts only with relevant data
        const newObjectItems = response.data.map(c => {
          return {
            id: c.id,
            name: c.name,
            username: c.username,
            email : c.email
          };
        });

        newObjectItems.sort(function(a, b){
          var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
          if (nameA < nameB) //sort string ascending
          return -1;
          if (nameA > nameB)
          return 1;
          return 0; //default return value (no sorting)
        });

        // create a new "state" object without mutating
        // the original state object.
        const newState = Object.assign({}, this.state, {
          objectItems: newObjectItems
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Contact Manager</h1>
        </header>
        <FilteredList/>
        <ObjectList objectItems={this.state.objectItems} />
      </div>
    );
  }
}

export default App;
