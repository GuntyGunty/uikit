import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button'

class App extends Component {
  render() {
    return (
      <div>
        <Button onClick={() => console.log('hi')} theme={'primary'} state={'enabled'}><h1>click</h1></Button>
      </div>
    );
  }
}

export default App;
