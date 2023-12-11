import { StyledHeader, StyledLink, StyledNavigation } from './Header.styled';
import { Container } from '../Container/Container';

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledNavigation>
          <StyledLink to='/'>Home</StyledLink>
          <StyledLink to='/movie'>Movie</StyledLink>
        </StyledNavigation>
      </Container>
    </StyledHeader>
  );
}
