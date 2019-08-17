import React, { Component } from 'react';
import Link from './Components/Link/Link'
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button'

class App extends Component {
  render() {
    return (

      <div>
        <Button onClick={() => console.log('hi')} theme={'primary'} state={'enabled'}><h1>click</h1></Button>
        <Link href='https://github.com/GuntyGunty' theme='onlight' variants='single'>
          <span>This is link</span>
        </Link>
      </div>
    );
  }
}

export default App;
