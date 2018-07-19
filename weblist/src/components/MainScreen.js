import React, { Component } from "react";
import axios from "axios";
import logo from "./mtg-logo.jpg";
import "./MainScreen.css";
import ObjectList from "./ObjectList";

class MainScreen extends Component {
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
      if (nameA < nameB)
      return -1;
      if (nameA > nameB)
      return 1;
      return 0;
    });
    const newState = Object.assign({}, this.state, {
      objectItems: unSortedItems,
      initialItems: allItems
    });
    this.setState(newState);
  }

  getData() {
    axios
      .get("https://api.magicthegathering.io/v1/cards?set=ARB")
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
          <img src={logo} className="App-logo" alt="Magic the Gathering Logo" />
          <h1 className="App-title">Magic the Gathering</h1>
        </header>
        <input type="text" placeholder="Search" onChange={this.filterList.bind(this)}/>
        <ObjectList objectItems={this.state.objectItems} />
      </div>
    );
  }
}

export default MainScreen;
