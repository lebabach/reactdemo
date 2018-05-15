import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
//import header from './components/header'
class App extends Component {
  getVal(){
    return "bach";
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">Welcome {this.getVal()}</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload111.
        </p>
      </div>
    );
  }
}

export default App;
