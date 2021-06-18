import styled from 'styled-components';
import { color, margin, padding, position } from './Utils';

export const Table = styled.table`
  border-collapse: collapse;

  ${margin}
  ${padding}
  ${position}

  & thead {
    border-bottom: 2px solid ${color.gray1};
  }

  & th {
    font-weight: bold;
    text-align: left;
    padding: 12px 10px;
  }

  & tr {
    border-bottom: 1px solid ${color.gray1};
  }

  & td {
    color: ${color.white};
    padding: 12px 10px;
    min-width: 120px;
  }
`;
