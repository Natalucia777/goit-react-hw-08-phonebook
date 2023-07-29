import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 18px;

  &.active {
    color: #2978d9;
    text-stroke: black;
  }
`;
export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
