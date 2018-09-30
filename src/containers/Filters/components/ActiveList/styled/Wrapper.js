import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 0 0 20px;
  margin: 0 0 20px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.lighter};
`;
