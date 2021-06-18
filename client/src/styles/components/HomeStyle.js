import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { theme } from '../root';

export const RouterLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.black};
`;
