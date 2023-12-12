import { StyledHeader, StyledLink, StyledNavigation } from './Header.styled';
import Container from '../Container/Container';

function Header() {
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

export default Header
