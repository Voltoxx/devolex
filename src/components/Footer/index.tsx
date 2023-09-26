import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000;
  padding: 20px;
  text-align: center;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const FooterText = styled.p`
  font-size: 0.8em;
  color: #fff;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterLink to="https://arthurphilippe.fr/">Mentions légales</FooterLink>
      <FooterLink to="https://arthurphilippe.fr/">Contact</FooterLink>
      <FooterLink to="https://arthurphilippe.fr/">FAQ</FooterLink>
      <FooterText>© 2023 Devolex - Tous droits réservés</FooterText>
    </FooterContainer>
  );
}

export default Footer;
