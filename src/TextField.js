import React from 'react';
import Label from './Label';
import { useFormContext, useFocusState } from './formUtils';
import ErrorMessage from './ErrorMessage';

const TextField = ({ name, label, required }) => {
  const { focused, handleFocus, handleBlur } = useFocusState();
  const { errors, inputs, handleChange } = useFormContext();

  const error = errors[name];
  console.log(error);
  return (
    <Label className="field-text" isFocused={focused} htmlFor={name}>
      {label}
      {required && '*'}
      <input
        className="text-input"
        type={name === 'email' ? 'email' : 'text'}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={inputs[name]}
        onChange={handleChange}
        required={required}
      />
      {error && <ErrorMessage className="error--text-field" error={error} />}
    </Label>
  );
};

export default TextField;
