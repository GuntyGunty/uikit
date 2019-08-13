import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
 
  onClick = (e) => {
    this.props.onClick();
  }

  render() {
    let className = 'Button ';
    switch(this.props.theme) {
      case 'accent' :
      case 'secondary':
        className += ' ' +  this.props.theme
        break;
      default:
        className += 'primary'
    }
      
    switch(this.props.state) {
      case 'processing':
      case 'disabled':
        className +=  ' ' + this.props.state
        break;
      default: className += 'enabled'
    }

    getClassName = (element, classesArray) => {
      switch(element) {

      }
    }

    return (
      <button onClick={this.onClick} className={className} >
        {this.props.children}
      </button>
    );
  }
}

export default Button;