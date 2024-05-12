import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import './menu.css';

const MenuDeskopt = ({ active }) => {
  return (
    <Nav>
      <Nav.Link className={active === 'home' ? 'activeMenuItem' : ''} href="/">
        Strona główna
      </Nav.Link>
      <NavDropdown title="Oferta" id="basic-nav-dropdown">
        <NavDropdown.Item className={active === 'aplikacje' ? 'activeMenuItem' : ''} href="/aplikacje-webowe">
          Aplikacje Webowe
        </NavDropdown.Item>
        <NavDropdown.Item className={active === 'wordpress' ? 'activeMenuItem' : ''} href="/strony-wordpress">
          Strony WordPress
        </NavDropdown.Item>
        <NavDropdown.Item className={active === 'html' ? 'activeMenuItem' : ''} href="/strony-niestandardowe">
          Strony niestandardowe
        </NavDropdown.Item>
        <NavDropdown.Item className={active === 'sklep' ? 'activeMenuItem' : ''} href="/sklepy-internetowe">
          Sklepy www
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#kontakt">Kontakt</Nav.Link>
      <Nav.Link className={active === 'blog' ? 'activeMenuItem' : ''} href="/blog">
        Blog
      </Nav.Link>
    </Nav>
  );
};

export default MenuDeskopt;
