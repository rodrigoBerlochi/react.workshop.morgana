import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React, Morgana!</h2>
          <p>It is an exercise to learn by doing, using only Facebook tools: <a href="https://facebook.github.io/react/" target="_blank">React</a> + <a href="https://facebook.github.io/flux/docs/flux-utils.html#content" target="_blank">Flux Utils</a> + create-react-app</p>
          <p>Potencially, you have <a href="https://flowtype.org/" target="_blank">Flow</a> and <a href="https://facebook.github.io/immutable-js/" target="_blank">Immutable.js</a>, also by Facebook.</p>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
