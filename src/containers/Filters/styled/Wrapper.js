import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  
  margin: 0 0 20px;
  padding: 10px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.primary.light};  
  
  z-index: 1000;
`;
