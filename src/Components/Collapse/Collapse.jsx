import React from 'react'
import './Collapse.css'

export default class Collapse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      // children: null,
      collapseContainerName: 'Collapse-container',
    }
  }

  onClick = (e) => {
    this.setState({isOpened: !this.state.isOpened, 
      collapseContainerName: (this.state.isOpened) ? 'Collapse-container' : 'Collapse-container opened'
    });
  }

  render() {
    return (
      <div className="Collapse">
        <span className="Collapse-toggler" onClick={this.onClick}>Show more</span>
        <div className={this.state.collapseContainerName}>
          {this.props.children}
        </div>
      </div>
    )
  }
}