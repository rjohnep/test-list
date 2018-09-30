import styled, { css } from 'styled-components';

const activeStyle = ({ active }) => active && css`
  && {
    background: ${({ theme }) => theme.colors.primary.light};
    
    &:hover {
      opacity: 1;
      background: ${({ theme }) => theme.colors.primary.light};
    }
  }
`;

export default styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  padding: 8px 16px;
  text-transform: capitalize;
  
  transition: opacity .3s, background .3s;
  
  &:hover {
    opacity: .7;
    background: ${({ theme }) => theme.colors.primary.lighter};
  }  
  
  ${activeStyle};
`;
