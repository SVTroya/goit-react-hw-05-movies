import styled from 'styled-components';

export const ReviewsList = styled.ul`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  list-style: none;
`;

export const ReviewItem = styled.li`
  width: 100%;
  background-color: var(--color-card-bckg);
  border-radius: 12px;
  border: 1px solid #2e2f42;
  color: var(--color-text-dark);
  padding: 20px;

  p{
    text-align: justify;
    margin-bottom: 20px;
  }
`;

export const Author = styled.span`
  display: block;
  margin-left: auto;
  font-weight: 500;
  text-align: right;
`;
