import React, { Component } from 'react';
<<<<<<< HEAD

import Input from './Components/Input/Input';
import Form from './Components/Form/Form'

import { InputMasks } from './Components/Input//InputMasks'

=======
import Input from './Components/Input/Input'
import Link from './Components/Link/Link'
>>>>>>> 33fe4cee9256134a869cd5605390a7609677b4ba
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: {
        isValid: false,
        value: '',
      },
      email: {
        isValid: false,
        value: '',
      },
      checkbox: {
        value: false,
      }
    }
  }

  handleLogin = (target) => {
    const formData = new FormData(target);
    const email = formData.get('email');
    const emailMask = InputMasks.get('EMAIL')
    const isEmailValid = emailMask.test(email);
    const phone = formData.get('phone');
    const phoneMask = InputMasks.get('PHONE');
    const isPhoneValid = phoneMask.test(phoneMask);

    if(isEmailValid) {
      this.setState({
        email: { isValid: true },
      });
    } else {
      this.setState({
        email: { isValid: false }
      });
    }

    if (isPhoneValid) {
      this.setState({
        phone: { isValid: true },
      });
    } else {
      this.setState({
        phone: { isValid: false }
      });
    }
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: {
        value,
        isValid: true,
      },
    });
  }

  render() {
    const { phone, email, checkbox } = this.state;

    return (

      <div>
        <Input 
          type="phone"
          name="phone"
          placeholder="+7 999 999 99 99"
          isValid={email.isValild}
          onChange={(value) => this.handleInputChange('phone', value)}
          onBlur={() => console.log(this.state)}
          variant={'bordered'}> 
          <span>Some description here</span>
        </Input>
<<<<<<< HEAD
        <Input
          type="email"
          name="email"
          isValid={email.isValild}
          theme="secondary"
          placeholder="email@mail.ru"
          variant={'bordered'}> 
        </Input>
=======
        <Button onClick={() => console.log('hi')} theme={'primary'} state={'enabled'}><h1>click</h1></Button>
        <Link href='https://github.com/GuntyGunty' theme='onlight' variants='single'>
          <span>This is link</span>
        </Link>
>>>>>>> 33fe4cee9256134a869cd5605390a7609677b4ba
      </div>
    );
  }
}

export default App;
