import React from 'react';
import './Link.css';
import { THEMES } from '../../Consts/Themes';
import { buildClassName } from '../../Utils/buildClassName';

const Link = ({
  href, 
  onClick,
  theme,
  variant,
  children,
}) => {
  const _className = buildClassName(
    'Link',
    variant,
    THEMES.get(theme),
  );

  return (
    <a href={href} onClick={onClick} className={_className}>
      {children}
    </a>
  )
}

export default Link;




// export default class Link extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       isClicked: false,
//     };
//   }

//   onClick = (e) => {
//     this.setState({
//       isClicked: !this.state.isOpened,
//     });
//   }

//   render() {
//     const {
//       href, 
//       onClick,
//       theme,
//       variant,
//       children,
//     } = this.props;

//     const className = buildClassName(
//       'Link',
//       variant,
//       THEMES.get(theme),
//     );

//     return (
//       <a href={href} onClick={onClick} className={className}>
//         {children}
//       </a>
//     );
//   }
// }