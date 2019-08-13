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
      case 'accent':
        className += ' ' + this.props.theme
      breack
      default: 'primary'
    }

    // variants border no-border
    // state error focused verified

    return (
      <label>
        {this.props.children}
        <input type='text' className={className} onChange={this.onChange} value={this.state.value} placeholder={this.props.placeholder}/>
      </label>
    ); 
  }
}