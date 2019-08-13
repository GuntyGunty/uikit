import React, { Component } from 'react';

import Input from './Components/Input/Input'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Input placeholder='type somth'> 
          <span>Some description here</span>
        </Input>
      </div>
    );
  }
}

export default App;
