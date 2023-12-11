import { AdaptiveContainer } from './Container.styled';

export function Container({ children }) {
  return (
    <AdaptiveContainer>
      {children}
    </AdaptiveContainer>
  );
}
