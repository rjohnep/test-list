import styled from 'styled-components';

import Wrapper from './Wrapper';

export default styled.div`
  width: 100%;
  height: 200px;  
  
  background: url("${({ image }) => image}") 50% 50% no-repeat;
  background-size: auto 200px;
  
  transition: transform .3s;
  transform: translateZ(0);
  
  ${Wrapper}:hover & {
    transform: scale(1.15) translateY(-10px) translateZ(0);
    transition: transform 1s;
  }
`;
