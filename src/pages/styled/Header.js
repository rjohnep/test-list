import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  margin: 0 0 20px;
  
   @media (max-width: 640px) {
    justify-content: space-between;
  }
`;
