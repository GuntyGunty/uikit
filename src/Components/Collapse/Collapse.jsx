import React from 'react'
import './Collapse.css'

export default class Collapse extends React.Component {
  render() {
    return (
      <div className='Collapse'>
        <span className='Collapse_toggler'>Show more</span>
        <div class='Collapse_container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}