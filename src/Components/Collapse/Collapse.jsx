import React from 'react'
import './Collapse.css'

export default class Collapse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      children: this.props.children,
    }
  }

  onClick = (e) => {
    this.setState({
      isOpened: !this.state.isOpened
    });

    console.log(this.state.isOpened)

    if(this.state.isOpened) {
      children: null
     } else {
      children: this.props.children
     }

  }

  render() {
    const { isOpened } = this.state;

    return (
      <div className='Collapse'>
        <span className='Collapse_toggler' onClick={this.onClick}>Show more</span>
        <div className='Collapse_container'>
          {this.state.children}
        </div>
      </div>
    )
  }
}