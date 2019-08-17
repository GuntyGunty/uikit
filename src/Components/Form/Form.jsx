import React from 'react';

export default class Form extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
    typeof this.props.onSubmit === 'function' && this.props.onSubmit(e.target);
  }
  
  render() {
    return (
      <form className="From" onSubmit={this.onSubmit}>
        {this.props.children}
      </form>
    );
  }
}
