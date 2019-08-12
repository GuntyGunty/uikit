import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
 
  onClick = (e) => {
    this.props.onClick();
    console.log(e.target);
  }

  render() {
    let className = 'Button ';
    switch(this.props.theme) {
      case 'secondary':
        className += this.props.theme
        break;
      default:
        className += 'primary'
    }
      
    switch(this.props.state) {
      case 'enabled': 
      case 'processing':
      case 'disabled':
        className +=  ' ' + this.props.state
        break;
    }

    return (
      <button onClick={this.onClick} className={className} >
        {this.props.children}
      </button>
    );
  }
}

export default Button;