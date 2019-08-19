import React from 'react';
import './Link.css';
import { THEMES } from '../../Consts/Themes';
import { buildClassName } from '../../Utils/buildClassName';

export default class Link extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
    };
  }

  onClick = (e) => {
    this.setState({
      isClicked: !this.state.isOpened,
    });
  }

  render() {
    const {
      href, 
      onClick,
      theme,
      variant,
    } = this.props;

    const className = buildClassName(
      'Link',
      variant,
      THEMES.get(theme),
    );

    return (
      <a href={this.props.href} onClick={this.onClick} className={className}>
        {this.props.children}
      </a>
    );
  }
}