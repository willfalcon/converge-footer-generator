import styled from 'styled-components';
import classNames from 'classnames';

import { media } from './theme';

const Label = styled.label.attrs(props => {
  // console.log(props);
  const { halfWidth } = props;
  return {
    className: classNames('field-label', { halfWidth }),
  };
})`
  /* height: 100%; */
  width: 100%;
  position: relative;
  transition: 0.15s;
  display: block;
  /* color: ${({ theme }) => theme.dark}; */
  &:not(.field-file) {
    margin: ${({ isFocused }) => (isFocused ? '0px 0px 5px 1px' : '1px 1px 6px')};
  }
  grid-column: span 2;
  ${media.break`
      grid-column: ${({ halfWidth }) => (halfWidth ? 'span 1' : 'span 2')};
  `}
  .label-text {
    position: absolute;
    top: 50%;
    left: 1rem;
    transition: 0.15s;
    &:not(.label-text--file) {
      transform: ${({ isFocused }) => (isFocused ? 'translateY(-140%)' : 'translateY(-50%)')};
      font-size: ${({ isFocused }) => isFocused && '1.2rem'};
    }
    pointer-events: none;
    &.message-span {
      top: 0;
      transform: translateY(0);
    }
  }

  &.field-textarea {
    .label-text {
      top: 0;
      transform: translateY(0);
    }
  }

  &.field-file {
    /* border: none; */
    .label-text {
      /* position: static; */
    }
  }

  input,
  textarea,
  select {
    background: transparent;
    transition: 0.25s;
    border: ${({ theme, isFocused }) => `${isFocused ? '2px' : '1px'} solid ${theme.light}`};
    width: 100%;
    padding: 0.5rem 1rem;
    margin-bottom: 0;
    margin-top: 0.5rem;
    /* color: ${({ theme }) => theme.dark}; */

    &:focus {
      outline: none;
    }
  }

  &.checkboxes,
  &.radiobuttons {
    .label-text {
      position: relative;
    }
  }
`;

export default Label;
