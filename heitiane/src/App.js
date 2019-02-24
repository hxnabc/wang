import React, { Component } from 'react';

import './App.css';
import Home from './components/Home'
import Login from './login'
import './util/utils.js';
class App extends Component {


  render() {
      console.log(this.props.Cookies)
    return (
      <div className="App">
          <Login></Login>
      </div>
    );
  }
}

export default App;
