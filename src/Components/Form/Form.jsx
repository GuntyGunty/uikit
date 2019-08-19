import React from 'react';
import './Form.css'

const Form = ({
  onSubmit,
  children,
}) => {
  const onFormSubmit = (e) => {
    e.preventDafault();
    typeof onSubmit === 'function' && onSubmit(e.target);
  }

  return (
    <form className="Form" onSubmit={onFormSubmit}>
      {children}
    </form>
  )
};

export default Form;