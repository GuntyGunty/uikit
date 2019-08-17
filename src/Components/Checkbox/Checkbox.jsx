import React from 'react';
import { buildClassName } from '../../utils/buildClassName';

const Checkbox = ({
  isChecked,
  label,
  onChange,
  className,
  ...rest,
}) => {
  const _className = buildClassName(
    'Checkbox',
    className,
    isChecked ? 'checked' : ''
  );

  return (
    <label className={_className} {...rest}>
      <input
        className="Checkbox-shape"
        type="checkbox"
        value={isChecked}
        onChange={({ target }) => onChange && onChange(target.checked)}
      />
      <span className="Checkbox-label">
        {label}
      </span>
    </label>
  );
}

Checkbox.defualtProps = {
  isChecked: false,
}

export default Checkbox;