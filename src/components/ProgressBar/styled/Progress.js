import styled from 'styled-components';

export default styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  
  @media (max-width: 640px) {
    top: auto;
    bottom: 15px;
  }
`;
