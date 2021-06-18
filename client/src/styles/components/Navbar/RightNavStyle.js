import styled from 'styled-components';

import { mediaMax } from '../../root';
import { mixins } from '../../root';
import { theme } from '../../root';

export const Ul = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-right: 20px;

  li {
    padding: 18px 10px;
    margin-right: 10px;
    color: ${theme.colors.white};
    ${mixins.link}
    ${theme.transition}
  }

  ${mediaMax.tablet`
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

     li {
      color: #fff;
    }
`}
`;
