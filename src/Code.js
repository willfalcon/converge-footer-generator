import React from 'react';
import styled from 'styled-components';
import getCopyText from './getCopyText';

const Code = props => {
  return (
    <Pre>
      <code>{getCopyText(props)}</code>
    </Pre>
  );
};

const Pre = styled.pre`
  background: ${({ theme }) => theme.dark};
  overflow: scroll;
  padding: 1rem;
  code {
    color: ${({ theme }) => theme.light};
  }
`;

export default Code;
