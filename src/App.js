import React, { Component } from 'react';
import logo from './logo.svg';
import Butts from './spinner.js'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Fidget-Widget</h2>
        </div>
        <Butts/>
      </div>
    );
  }
}

export default App;
