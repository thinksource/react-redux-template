import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import { Button } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="text-warning">
          Etiam porta sem malesuada magna mollis euismod.
        </p>
        <Button color="danger">Danger!</Button>
      </div>
    );
  }
}

export default App;
