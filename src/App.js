import React, { Component } from 'react';
import Link from './Components/Link/Link'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Link href='https://github.com/GuntyGunty' theme='onlight' variants='single'>
          <span>This is link</span>
        </Link>
      </div>
    );
  }
}

export default App;
