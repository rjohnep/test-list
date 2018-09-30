import styled from 'styled-components';

export default styled.div`
  position: absolute;
  margin-top: 9px;
  
  min-width: 200px;
  padding: 0;
  border-radius: 3px;
  border: 1px solid rgba(0,0,0,0.11);
  background: #fff;
  
  @media (max-width: 640px) {
    width: calc(100% - 20px);
    left: 10px;
  }
`;
