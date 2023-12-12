import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledMovieDetails = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0;
  align-self: flex-start;
`;

export const Poster = styled.img`
  background-color: var(--color-card-bckg);
  border-radius: 8px;
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: var(--color-text-light);

  h1{
    font-size: 30px;
    font-weight: 500;
    line-height: 1.2;
  }

  h2{
    font-size: 20px;
    font-weight: 500;
  }

  p{
    text-align: justify;
  }
`;

export const MovieMenu = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: center;
`;

export const StyledMenuLink = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-light);

  &.active {
    position: relative;
    color: var(--color-accent);
  }
`;

export const BackLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-text-light);
  font-size: 25px;
  font-weight: 500;
  align-self: start;

  transition: color 250ms ease-in-out;

  &:hover, &:focus {
    color: tomato;
  }
`;
