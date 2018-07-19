import React, { Component } from "react";
import logo from "./logo.svg";
import "./MainScreen.css";

import axios from "axios";

import ObjectList from "./ObjectList";
import FilteredList from "./FilteredList";

class MainScreen extends Component {
  // default state object
  state = {
    objectItems: [],
    initialItems : []
  };

  componentDidMount() {
    console.log("did mount");
    this.getData();
    this.sortData();
  }

  sortData() {
    console.log("sort data");
    const unSortedItems = this.state.initialItems;
    const allItems = this.state.initialItems;
    unSortedItems.sort(function(a, b){
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
      objectItems: unSortedItems,
      initialItems: allItems
    });

    // store the new state object in the component's state
    this.setState(newState);

  }

  getData() {
    console.log("get data");
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
        const newState = Object.assign({}, this.state, {
          objectItems: newObjectItems,
          initialItems : newObjectItems
        });
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }
  filterList(event) {
    var updatedList = this.state.initialItems;
    console.log("Filter");
    console.log(this.state.objectItems.length);
    updatedList = updatedList.filter(function (item) {
      return item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    console.log(this.state.initialItems);
    console.log(updatedList.length);
    this.setState({ objectItems: updatedList, initialItems : this.state.initialItems });
  }

  render() {
    console.log("render");
    console.log(this.state.initialItems.length);
    console.log(this.state.objectItems.length);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Contact Manager</h1>
        </header>

        <input type="text" placeholder="Search" onChange={this.filterList.bind(this)}/>
        <ObjectList objectItems={this.state.objectItems} />
      </div>
    );
  }
}

export default MainScreen;
