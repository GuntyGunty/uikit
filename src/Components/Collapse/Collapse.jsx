import React from 'react'
import './Collapse.css'

export default class Collapse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      children: null,
    }
  }

  onClick = (e) => {
    this.setState({isOpened: !this.state.isOpened}, function() {
        if(this.state.isOpened) {
          this.setState({
            children: this.props.children
          })
        } else {
          this.setState({
            children: null
          })
        }
      }
    );
  }

  render() {
    return (
      <div className="Collapse">
        <span className="Collapse-toggler" onClick={this.onClick}>Show more</span>
        <div className="Collapse-container">
          {this.state.children}
        </div>
      </div>
    )
  }
}