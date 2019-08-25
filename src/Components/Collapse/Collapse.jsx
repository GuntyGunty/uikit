import React from 'react'
import './Collapse.css'

export default class Collapse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      collapseContainerName: 'Collapse',
    }
  }

  onClick = (e) => {
    this.setState({isOpened: !this.state.isOpened, 
      collapseContainerName: (this.state.isOpened) ? 'Collapse' : 'Collapse opened'
    });
  }

  render() {
    return (
      <div className={this.state.collapseContainerName}>
        <span className="Collapse-toggler" onClick={this.onClick}>Show more</span>
        <div className="Collapse-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}