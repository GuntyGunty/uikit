import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
 
  onClick = (e) => {
    this.props.onClick();
  }

  render() {
    let className = 'Button';

    let theme = {
      primary: 'primary',
      secondary: 'secondary',
      accent: 'accent' 
    }

    let state = {
      enabled: 'enabled',
      pcossing: 'processing',
      disabled: 'disabled'
    }

    let variants = {
      filled: 'filled',
      outlined: 'outlined'
    }

    let getClassName = (obj, props, className) => {
      for(let key in obj) {
        if(key === props) {
          className +=  ' ' + obj[key];
        }
      }

      return className
    }

    className = getClassName(theme, this.props.theme, className);
    className =  getClassName(state, this.props.state, className);
    className = getClassName(variants, this.props.variants, className);

    return (
      <button onClick={this.onClick} className={className} >
        {this.props.children}
      </button>
    );
  }
}

export default Button;