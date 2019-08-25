import React from 'react';
import './Input.css'
import { buildClassName } from '../../Utils/buildClassName';
import { InputMasks } from './InputMasks'
import { THEMES } from '../../Consts/Themes';
import { VARIANTS } from '../../Consts/Variants';

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
      typeof this.props.onChange === 'function' && this.props.onChange(value);
    }
  }

  render() {
    const {
      isValid,
      type,
      theme,
      variant,
      value,
      placeholder,
      onChange,
      inputDescr
    } = this.props;

    const className = buildClassName(
      'Input',
      isValid ? '' : 'invalid',
      THEMES.get(theme),
      VARIANTS.get(variant),
    );

    return (
      <label className={className}>
        <span className="Input-descr">{inputDescr}</span>
        <input 
          type={type}
          className="Input-field"
          onChange={onChange} 
          value={value} 
          theme={theme}
          placeholder={placeholder}
        />

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