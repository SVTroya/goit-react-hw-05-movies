import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  box-shadow: 0 1px 6px 1px black;
  `

export const StyledNavigation = styled.nav`
  display: flex;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 16px 0;

  font-size: 28px;
  font-weight: 500;
  color: var(--color-text-light);

  &.active {
    position: relative;
    color: var(--color-accent);
  }

  &.active::after {
    content: '';
    width: 100%;
    height: 4px;
    position: absolute;
    border-radius: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--color-accent);
  }
`;
