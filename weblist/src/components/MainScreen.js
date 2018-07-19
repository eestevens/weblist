import React, { Component } from "react";
import logo from "./logo.svg";
import "./MainScreen.css";

import axios from "axios";

import ObjectList from "./ObjectList";

class MainScreen extends Component {
  // default state object
  state = {
    objectItems: [],
    initialItems : []
  };
  componentWillMount() {
    this.getData();
  }

  sortData() {
    const unSortedItems = this.state.objectItems;
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
    axios
      .get("https://api.magicthegathering.io/v1/cards?set=ODY")
      .then(response => {
        // create an array of contacts only with relevant data
        const newObjectItems = response.data.cards.map(c => {
          return {
            id: c.id,
            name: c.name,
            username: c.type,
            email : c.rarity,
            creatureText : c.originalText,
            color : c.colors,
            image : c.imageUrl,
            toughness : c.toughness,
            power : c.power,
            flavor : c.flavor
          };
        });
        const newState = Object.assign({}, this.state, {
          objectItems: newObjectItems,
          initialItems : newObjectItems
        });
        this.setState(newState);
        this.sortData();
      })
      .catch(error => console.log(error));
  }
  filterList(event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function (item) {
      var stringOutput = JSON.stringify(item);
      return stringOutput.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ objectItems: updatedList, initialItems : this.state.initialItems });
  }

  render() {
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
