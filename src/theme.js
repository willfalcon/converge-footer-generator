import { css } from 'styled-components';
import { rgba } from 'polished';
const theme = {
  green: '#009888',
  red: '#D94F09',
  mint: '#DAEFEF',
  navy: '#373E96',
  gray: '#5F7B83',
  dark: '#4A4A4A',
  light: '#979797',
  teal: '#008eaa',
  shadow: `${rgba('#922D2D', 0.4)} 0 2px 13px`,
  font: {
    family: 'adelle-sans,sans-serif',
    special: 'dashiell-bright,serif',
    condensed: 'adelle-sans-condensed, sans-serif',
    medium: 500,
    bold: 700,
    extrabold: 800,
  },
  sizes: {
    break: 768,
    large: 1024,
    content: 800,
    header: 140,
  },
  grid: {
    enabled: true,
  },
};

const media = Object.keys(theme.sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${theme.sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const grid = Object.keys(theme.grid).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @supports (display: grid) {
      ${css(...args)}
    }
  `;
  return theme.grid.enabled ? acc : null;
}, {});

export default theme;
export { media, grid };
