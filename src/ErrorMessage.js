import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const ErrorMessage = ({ type, message, ref, className }) => {
  // console.log(type);
  if (type === 'required') {
    return (
      <Error className={classNames('error-message', className)}>
        This field is required!
      </Error>
    );
  }
};

const Error = styled.p`
  color: red;
`;

export default ErrorMessage;
