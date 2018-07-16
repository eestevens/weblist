import React, { Component } from 'react';
import ObjectItem from "./ObjectItem";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <ObjectList/>
      <ObjectItem name="Erik"/>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
    <header className="App-header">
      <h1 className="App-title">Web List</h1>
    </header> );
  }
}

class ObjectList extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => <li key={number}>{number}</li>);

    return (<ul>Items {listItems}</ul>);
  }
}

export default App;
