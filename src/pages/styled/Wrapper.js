import styled from 'styled-components';

export default styled.div`
  display: grid;
  align-content: start;

  padding: 20px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.lightest};
  
  @media (max-width: 980px) {
    padding: 20px 10px;
  }
`;
