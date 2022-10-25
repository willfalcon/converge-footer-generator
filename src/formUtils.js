import React, { useState, createContext, useContext } from 'react';
import { isPossiblePhoneNumber } from 'libphonenumber-js';

function useForm(initial = {}) {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }
    if (type === 'checkbox') {
      if (value === false || value === 'false') {
        value = true;
      } else {
        value = false;
      }
    }
    if (e.target.nodeName === 'SPAN') {
      if (e.target.previousElementSibling.type === 'radio') {
        value = e.target.previousElementSibling.value;
        name = e.target.previousElementSibling.name;
      }
    }
    if (name === 'phone') {
      if (!isPossiblePhoneNumber(value, 'US')) {
        setErrors({ ...errors, phone: 'Must be a 10 digit phone number!' });
      } else {
        setErrors({ ...errors, phone: '' });
      }
    }

    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
    success,
    setSuccess,
    errors,
    setErrors,
    loading,
    setLoading,
  };
}

const useFocusState = (type = 'default') => {
  const [focused, setFocus] = useState(false);
  const handleFocus = e => {
    setFocus(true);
  };
  const handleBlur = e => {
    if (type === 'date') {
      if (e[0].target.tagName === 'INPUT') {
        if (!e[0].target.value) {
          setFocus(false);
        }
      }
    } else {
      if (!e.target.value) {
        setFocus(false);
      }
    }
  };

  return { focused, setFocus, handleFocus, handleBlur };
};

const FormContext = createContext();

const FormContextProvider = ({ value, children }) => {
  // console.log({ values: value.control.getValues() });
  return <FormContext.Provider value={{ ...value }}>{children}</FormContext.Provider>;
};

const useFormContext = () => useContext(FormContext);

function getFieldOptions(options) {
  const required = options && options.required ? options.required : false;
  const halfWidth = options && options.halfWidth ? options.halfWidth : false;
  const description = options && options.description ? options.description : false;
  const adminLabel = options && options.adminLabel ? options.adminLabel : false;
  const fieldName = adminLabel ? adminLabel : options.name;
  return { required, halfWidth, description, adminLabel, fieldName };
}

export { useForm, useFocusState, FormContextProvider, useFormContext, getFieldOptions };
