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
  const linkName = buildClassName(
    'Link',
    variant,
    THEMES.get(theme),
  );

  return (
    <a href={href} onClick={onClick} className={linkName}>
      {children}
    </a>
  )
}

export default Link;



