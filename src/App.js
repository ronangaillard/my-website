import React, { Component } from 'react';
import { Router, Route, Switch, Link, browserHistory } from 'react-router'
import NavBar from './components/navBar.js'
import HomePage from './components/homePage.js'

class App extends Component {
  render() {
    return (
     <div className="container content">
        <NavBar />
        {this.props.children || <HomePage/>}
      </div>
    );
  }
}

export default App;
