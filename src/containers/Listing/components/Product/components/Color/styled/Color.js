import styled, { css } from 'styled-components';

const activeStyle = ({ theme, active }) => active && css`
  &&:hover {
    opacity: 1;
  }
  &:after {
    content: '';
    
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 2px;
    
    background: ${theme.colors.third.main};
  } 
  
`;

export default styled.div`
  position:relative;
  margin: 0 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme, color }) => theme.colors[color]};
  
  ${activeStyle};   
  
  transition: opacity .3s;
  
  &:hover {
    opacity: .5;
  }
`;
