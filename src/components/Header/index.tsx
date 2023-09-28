import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  float: right;
  padding: 10px 15px;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  color: #fff;
  background-color: #000;
  border-radius: 5px;
  border: 1px solid #000;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const StyledHeader = styled.header`
  background-color: #000;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/pokedex">Pokedex</StyledLink>
        <StyledLink to="/team">Team</StyledLink>
        <StyledLink to="/suggestion">Suggestion</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
