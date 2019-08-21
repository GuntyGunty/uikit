import React, { Component } from 'react';
import './App.css';

import Input from './Components/Input/Input';
import Checkbox from './Components/Checkbox/Checkbox';
import Form from './Components/Form/Form'

// import { InputMasks } from './Components/Input//InputMasks'

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
          <Checkbox 
            isChecked={checkbox.value}
            onChange={(isChecked) => this.handleInputChange('checkbox',isChecked)}
          />
          <Input type="submit" />
        </Form>
        <Button onClick={() => console.log("hi")} theme="primary" state={"enabled"}><span>click</span></Button>
        <Link href='https://github.com/GuntyGunty' theme="primary" variant="single">This is link</Link>
        <Collapse>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </Collapse>
      </div>
    );
  }
}

export default App;
