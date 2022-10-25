import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const ErrorMessage = ({ error, className }) => {
  // console.log(type);

  return <Error className={classNames('error-message', className)}>{error}</Error>;
};

const Error = styled.p`
  color: red;
`;

export default ErrorMessage;
