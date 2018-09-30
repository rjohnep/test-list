import styled from 'styled-components';

export default styled.div`
  width: 35px;
  height: 35px; 
  background: ${({ theme, color }) => theme.colors[color]};
  
  transition: background .6s;
`;
