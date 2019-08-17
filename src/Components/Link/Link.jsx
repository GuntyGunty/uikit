import React from 'react';
import './Link.css';

export default class Link extends React.Component {

//нужен ли ссылке state is clicked?

  

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
      return className;
    }

    className = getClassName(theme, this.props.theme, className);
    className = getClassName(variants, this.props.variants, className);

    return (
      <div className={className} onClick={this.onClick}>
        <a href={this.props.href}>
          {this.props.children}
        </a>
      </div>
    );
  }
}