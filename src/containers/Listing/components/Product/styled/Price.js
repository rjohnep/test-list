import styled from 'styled-components';
import { rgba } from 'polished';

export default styled.div`
  align-self: start;
  
  padding: 4px 16px 4px 4px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => rgba(theme.colors.black, 0.6)};
`;
