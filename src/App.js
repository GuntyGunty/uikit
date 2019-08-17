import React, { Component } from 'react';
import Link from './Components/Link/Link'
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button'
import ReactDOM from 'react-dom';

import Form from './Components/Form/Form';
import Input from './Components/Input/Input'
import Checkbox from './Components/Checkbox/Checkbox';

const emailMask = /^(\w)*@(\w)+.\w{2,}$/g;

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
    const isEmailValid = emailMask.test(email);

    if (isEmailValid) {
      // send ajax
      this.setState({
        email: { isValid: true },
      });
    } else {
      this.setState({
        email: { isValid: false },
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
    const { email, checkbox } = this.state;
    
    const Tag = 'p';

    return (
      <div>
        <Form onSubmit={this.handleLogin}>
          <Input
            type="phone"
            name="phone"
            theme="primary"
            placeholder="+ 7 999 999 99 99"
            isValid={email.isValid}
            onChange={(value) => this.handleInputChange('phone', value)}
            onBlur={() => console.log(this.state)}
          />
          <Input
            name="email"
            placeholder="abba@mail.ru"
          />

          <Checkbox
            isChecked={checkbox.value}
            onChange={(isChecked) => this.handleInputChange('checkbox', isChecked)}
          />

          <input type="submit" />
        </Form>

        <Tag>Hello</Tag>

        {
          React.createElement(
            'h2',
            { children: 'Second way' }
          )
        }
      </div>
    );
  }
}

export default App;
