import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rgba } from 'polished';

export default styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.primary.dark};
  background: ${({ theme }) => theme.colors.primary.main};
  
  transition: background .3s;
  
  &:hover {
    background: ${({ theme }) => rgba(theme.colors.primary.main, 0.7)};
  }
`;
