import React from 'react';
import './Input.css'
import { buildClassName } from '../../Utils/buildClassName';
import { InputMasks } from './InputMasks'
import { THEMES } from '../../Consts/Themes';

const TYPES = new Map([
  ['text', {}], 
  ['phone', {
    className: 'Input-phone',
    validator: InputMasks.get('PHONE'),
    placeholder: '+7 999 999 99 99'
  }],
  ['email', {
    className: 'Input-mail',
    validator: InputMasks.get('EMAIL'),
    placeholder: 'email@mail.ru'
  }],
]); 

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue || '',
    }
  }

  onChange = (e) => {
    const { type } = this.props;
    const value = e.target.value;

    const inputType = TYPES.get(type);

    if(value.match(inputType.validator)) {
      this.setState({ value });
      typeof this.props.onChange === 'function' && this.props.onChange;
    }
  }

  render() {
    const {
      name, 
      isValid,
      type,
      theme,
      variant,
      onBlur,
    } = this.props;

    const className = buildClassName(
      'Input-field',
      this.props.isValid ? '' : 'invalid',
      THEMES.get(theme),
    );

    // console.log(this.props.isValid);

    return (
      <label className="Input">
        {this.props.children}
        <input type={type}
               className={className} 
               onChange={this.onChange} 
               value={this.state.value} 
               theme={this.state.theme}
               placeholder={this.props.placeholder}/>
      </label>
    ); 
  }
}

Input.defaultProps = {
  type: 'text',
  theme: 'primary',
  state: 'enabled',
  variant: 'bordered',
};

export default Input;