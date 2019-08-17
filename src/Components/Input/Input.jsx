import React from 'react';
import css from './Input.css'
import { buildClassName } from '../../utils/buildClassName';
import { InputMasks } from './InputMasks';

const TYPES = new Map([
  ['text', {}],
  ['phone', {
    className: 'Input-phone',
    validator: InputMasks.get('PHONE'),
    placeholder: '+7 999 999 99 99'
  }]
]);

const THEMES = new Map([
  ['primary', 'primary']
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
    
    if (value.match(inputType.validator)) {
      this.setState({ value });
      typeof this.props.onChange === 'function' && this.props.onChange(value);
    }
  }

  render() {
    const {
      name,
      isValid,
      type,
      theme,
      onBlur,
    } = this.props;

    //let className = 'Input-field'

    // let theme = {
    //   primary: 'primary',
    //   secondary: 'secondary',
    //   accent: 'accent'
    // }

    let state = {
      enabled: 'enabled',
      focused: 'focused',
      disabled: 'disabled',
      error: 'error',
      verified: 'verified'
    }

    let variants = {
      bordered: 'bordered',
      nobordered: 'nobordered'
    }

    let getClassName = (obj, props, className) => {
      for(let key in obj) {
        if(key === props) {
          className += ' ' + obj[key];
        }
      }

      return className
    }

    //className = getClassName(theme, this.props.theme, className);
    //className = getClassName(state, this.props.state, className);
    //className = getClassName(variants, this.props.variants, className);

    const className = buildClassName(
      'Input-field',
      isValid ? '' : 'invalid',
      THEMES.get(theme),
    );

    return (
      <label className={className}>
        {this.props.children}
        <input
          type={type}
          name={name}
          className={className}
          onChange={this.onChange}
          value={this.state.value}
          placeholder={this.props.placeholder}
          onBlur={onBlur}
        />
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