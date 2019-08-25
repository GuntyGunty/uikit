import React from 'react';
import './Button.css';
import { THEMES } from '../../Consts/Themes';
import { VARIANTS } from '../../Consts/Variants';
// import { STATE } from '../../Consts/State';
import { buildClassName } from '../../Utils/buildClassName';

const Button = ({
  children,
  className,
  theme,
  state,
  variant,
  onClick
}) => {
  const buildedClassName = buildClassName (
    'Button',
    className,
    THEMES.get(theme),
    VARIANTS.get(variant),
  );

  onClick = (e) => {
    this.props.onClick();
  }

  return (
    <button className={buildedClassName}>{children}</button>
  )
}

export default Button;
