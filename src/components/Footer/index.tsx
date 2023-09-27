import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #000;
  padding: 20px;
  text-align: center;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const LinkDevolis = styled.a`
  color: #fff;
  text-decoration: none;
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
      <FooterLink href="https://arthurphilippe.fr/" target="_blank">
        Mentions légales
      </FooterLink>
      <FooterLink href="https://arthurphilippe.fr/" target="_blank">
        Contact
      </FooterLink>
      <FooterLink href="https://arthurphilippe.fr/" target="_blank">
        FAQ
      </FooterLink>
      <FooterText>
        © 2023{' '}
        <LinkDevolis href="https://www.devolis.com/" target="_blank">
          Devolis
        </LinkDevolis>{' '}
        - Tous droits réservés
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;
