import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 200px;  
  
  background: url("${({ image }) => image}") 50% 50%;
  background-size: auto 200px;
`;
