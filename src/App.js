import React, { Component } from 'react';

import Input from './Components/Input/Input';
import Form from './Components/Form/Form'

import { InputMasks } from './Components/Input//InputMasks'

import logo from './logo.svg';
import './App.css';

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
        <Input
          type="email"
          name="email"
          isValid={email.isValild}
          theme="secondary"
          placeholder="email@mail.ru"
          variant={'bordered'}> 
        </Input>
      </div>
    );
  }
}

export default App;
