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

    // getClassName = (obj, props, className) => {
    //   for(let key in obj) {
    //     if(key === props) {
    //       className += + ' ' + key;
    //     }
    //   }
    //   return className
    // }

    // getClassName(theme, this.props.theme, className);

    console.log(className);

    // switch(this.props.theme) {
    //   case 'accent' :
    //   case 'secondary':
    //     className += ' ' +  this.props.theme
    //     break;
    //   default:
    //     className += 'primary'
    // }
      
    // switch(this.props.state) {
    //   case 'processing':
    //   case 'disabled':
    //     className +=  ' ' + this.props.state
    //     break;
    //   default: className += 'enabled'
    // }


    return (
      <button onClick={this.onClick} className={className} >
        {this.props.children}
      </button>
    );
  }
}

export default Button;