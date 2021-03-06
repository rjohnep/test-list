import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4px 4px;

  width: 100%;
  max-width: 1024px;
  margin: 40px auto 0;
  
  @media (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }
   
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
