'use strict';

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//flux app
import AppStore from './flux/main-store.jsx';
import UserActions from './flux/user-actions.jsx';

// flux utils
import { Container } from 'flux/utils';

//components
import Button from './components/button.jsx';
import InputLabel from './components/input_label.jsx';

class App extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        
    }
    componentWillUpdate() {
        
    }
    componentDidUpdate(oldProps, oldState) {
        
    }
    onAddItem(item) {
        UserActions.addItem(item);
    }
    onAddItemByEnter(item) {
        this.onAddItem(item);
    }
    onAddItemByClick(item) {
        var item = this.refs.inputLabel1.refs.input1.refs.input1.value;
        if(!item) {
            console.warn('Input is empty');
            return;
        }
        this.refs.inputLabel1.refs.input1.refs.input1.value = '';
        this.onAddItem(item);
    }
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
          
          <InputLabel styling="" label="Morgana can define this label:"
            placeholder="Type something" name="catchSomeValue" inputStyle=""
            onAddItemByEnter={this.onAddItemByEnter.bind(this)} ref="inputLabel1" InputReference="input1"/>
            
          <Button text="Start" onClickButton={this.onAddItemByClick.bind(this)}/>
          
        </div>
      );
    }
};

App.getStores = () => ([AppStore]);
App.calculateState = (prevState) => ({data: AppStore.getState()});

const AppContainer = Container.create(App);

export default AppContainer;
