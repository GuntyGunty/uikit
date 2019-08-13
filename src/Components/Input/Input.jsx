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
    return (
      <label>
        <input type='text' className={`Input ` + this.props.className} onChange={this.onChange} value={this.state.value} placeholder={this.props.placeholder} />
      </label>
    ); 
  }
}