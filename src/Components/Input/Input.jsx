import React from 'react';

import './Input.css'

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue || '',
      isValid: false
    }
  }

  onChange = (e) => {
    let value = e.target.value;
    this.setState({
      value,
      
    })
  }

  render() {
    let className = 'Input-field'

    let theme = {
      primary: 'primary',
      secondary: 'secondary',
      accent: 'accent'
    }

    let state = {
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

    className = getClassName(theme, this.props.theme, className);
    className = getClassName(state, this.props.state, className);
    className = getClassName(variants, this.props.variants, className);

    return (
      <label className='Input'>
        {this.props.children}
        <input type='text' className={className} onChange={this.onChange} value={this.state.value} placeholder={this.props.placeholder}/>
      </label>
    ); 
  }
}