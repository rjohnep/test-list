import styled, { css } from 'styled-components';
import { rgba } from 'polished';

const activeStyle = ({ theme, isOpened }) => isOpened && css`
  background: ${rgba(theme.colors.secondary.lighter, 0.3)};
  border-color: ${theme.colors.third.main};
  
  :hover {
    background: ${rgba(theme.colors.secondary.lighter, 0.3)};
  }
`;

export default styled.h4`
  cursor: pointer;
  margin: 0;
  padding: 8px 20px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.secondary.light};
  text-transform: capitalize;
  background: ${({ theme }) => rgba(theme.colors.secondary.lighter, 0.9)};
  transition: background .3s, border-color .3s;
  
  :hover {
    background: ${({ theme }) => rgba(theme.colors.secondary.lighter, 0.5)};
  }
  
  ${activeStyle};
`;
