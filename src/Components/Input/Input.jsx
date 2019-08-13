import React from 'react';

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue || '',
      isValid: undefained
    }
  }

  onChange = (e) => {
    let value = e.target.value;
    this.setState({
      value,
    })
  }

  render() {
    let className = 'Input'

    switch(this.props.theme) { 
      case 'secondary':
      case 'error':
        className += ' ' + this.props.theme
      breack
      default: 'primary'
    }

    return (
      <label>
        <input type='text' className={className} onChange={this.onChange} value={this.state.value} placeholder={this.props.placeholder} />
      </label>
    ); 
  }
}