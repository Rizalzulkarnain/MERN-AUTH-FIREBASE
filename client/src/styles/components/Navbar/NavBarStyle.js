import styled from 'styled-components';

import { theme } from '../../root';
import { mixins } from '../../root';

export const Nav = styled.div`
  width: 100%;
  height: 55px;
  border-bottom: 3px solid ${theme.colors.black};
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background: ${theme.colors.darkWhite};

  .logo {
    padding: 15px 0;
    font-size: ${theme.fontSizes.xl};
    ${mixins.link}
    ${theme.transition}
  }
`;
