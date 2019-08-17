import React from 'react';
import './Link.css';

export default class Link extends React.Component {

  render() {

    let className = 'Link';

    let theme = {
      ondark: 'ondark',
      onlight: 'onlight'
    }

    let variants = {
      through: 'throught',
      single: 'single'
    }

    let getClassName = (obj, props, className) => {
      for(let key in obj) {
        if(key === props) {
          className += ' ' + obj[key];
        }
      }

      console.log(className);
      return className;
    }

    console.log(className);

    getClassName(theme, this.props.theme, className);
    getClassName(theme, this.props.variants, className);

    return (
      <div className={className}>
        <a href={this.props.href}>
          {this.props.children}
        </a>
      </div>
    );
  }
}