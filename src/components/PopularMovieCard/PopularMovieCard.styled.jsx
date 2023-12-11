import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PopularMovieItem = styled.li`
  background-color: var(--color-card-bckg);
  border-radius: 8px;
  height: 440px;
  transform: scale(1);

  transition: transform 250ms ease-in-out;

  &:hover, &:focus {
    transform: scale(1.02);
  }
`;

export const MovieLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 16px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 350px;
  border-radius: 8px;
  overflow: clip;
`;

export const MovieTitle = styled.h2`
  font-size: 20px;
  color: var(--color-text-dark);
  text-align: center;
  line-height: 1.2;
`;
