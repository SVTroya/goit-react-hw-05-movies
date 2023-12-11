import styled from 'styled-components';

export const PageTitle = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin: 40px auto 0;
  color: var(--color-text-light);
`;

export const MovieList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 330px));
  grid-auto-rows: minmax(350px, auto);
  grid-gap: 16px;
  justify-content: center;
  list-style: none;
`;
