import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import theme from '../root/theme';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: menlo, sans-serif;
    color: ${theme.colors.black};
    background-color: #ee5522;
`;

export * from './Button';
export * from './Input';
export * from './Modal';
export * from './Tooltip';
export * from './Alert';
export * from './Table';
export * from './Utils';
export * from './Box';
export * from './Text';
export * from './Image';
