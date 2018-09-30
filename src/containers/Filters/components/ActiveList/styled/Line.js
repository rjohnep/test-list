import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  width: 100%;
    
  @media (max-width: 640px) {
    flex-wrap: wrap;
  }
`;
