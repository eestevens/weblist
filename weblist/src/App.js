import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Header/>
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

export default App;
