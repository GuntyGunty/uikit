
import React from 'react';
import './Checkbox.css'
import { buildClassName } from '../../Utils/buildClassName';

const Checkbox = ({
  isChecked,
  label,
  onChange,
  className,
  ...rest,
}) => {
  const checkboxName = buildClassName(
    'Checkbox',
    className,
    isChecked ? 'checked' : ''
  );


return (
    <label className={checkboxName} {...rest}>
      <input 
        className="Checkbox-input"
        type="checkbox"
        value={isChecked}
        onChange={({ target }) => onChange && onChange(target.checked)}
      />
      <span className="Checkbox-label">
        {label}
      </span>
    </label>
  );
};


Checkbox.defaultProps = {
  isChecked: false,
}

export default Checkbox;





