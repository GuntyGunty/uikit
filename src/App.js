import React, { Component } from 'react';
import './App.css';

import Input from './Components/Input/Input';
import Checkbox from './Components/Checkbox/Checkbox';
import Form from './Components/Form/Form'
import { InputMasks } from './Components/Input/InputMasks'

import Collapse from './Components/Collapse/Collapse'
import Link from './Components/Link/Link'
import Button from './Components/Button/Button'

const emailMask = /^(\w)*@(\w)+.\w{2,}$/g;
const phoneMask = /^\+?\d{0,11}$/g;

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
    const phone = formData.get('phone');
    // const emailMask = InputMasks.get('EMAIL')
    const isEmailValid = emailMask.test(email);
    // const phoneMask = InputMasks.get('PHONE');
    const isPhoneValid = phoneMask.test(phone);

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

    console.log(phone.isValild);

    return (
      <div className="App">
        <Form onSubmit={this.handleLogin}>
          <Input 
            type="phone"
            name="phone"
            placeholder="+7 999 999 99 99"
            isValid={phone.isValild}
            onChange={(value) => this.handleInputChange('phone', value)}
            onBlur={() => console.log(this.state)}
            inputDescr="Some description"
            /> 
          <Input
            type="email"
            name="email"
            isValid={email.isValild}
            theme="secondary"
            placeholder="email@mail.ru"
          /> 
          <Checkbox 
            isChecked={checkbox.value}
            onChange={(isChecked) => this.handleInputChange('checkbox', isChecked)}
            label="Check it!"
          />
          <Input 
            className="Button"  
            type="submit" 
            value="Submit" 
          />
        </Form>
        <Button onClick={() => console.log("hi")} theme="primary" state="enabled" variant="filled"><span>click</span></Button>
        <Link href='https://github.com/GuntyGunty' theme="primary" className="test" variant="through">This is link</Link>
        <Collapse>
          <Link href='https://github.com/GuntyGunty' theme="primary" className="test" variant="single">This is link</Link>
          <Link href='https://github.com/GuntyGunty' theme="primary" className="test" variant="single">This is link</Link>
          <Link href='https://github.com/GuntyGunty' theme="primary" className="test" variant="single">This is link</Link>
          <Link href='https://github.com/GuntyGunty' theme="primary" className="test" variant="single">This is link</Link>
        </Collapse>
      </div>
    );
  }
}

export default App;
