import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body {
    min-height: 100%;
  
    color: ${({ theme }) => theme.colors.secondary.main};
    font-family: ${({ theme }) => theme.font.family};
    font-weight: 400;
    font-size: 14px;
  }
  
  #app {
    display: flex;
    
    overflow: hidden;
    min-height: 100vh;
  }
`;
