import styled from 'styled-components';

export const AdaptiveContainer = styled.div`
  margin: 0 auto;

  width: 100%;
  min-width: 320px;
  max-width: 375px;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media only screen and (min-width: 1158px) {
    max-width: 1440px;
  }
`;
