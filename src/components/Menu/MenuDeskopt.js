import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

const MenuDeskopt = () => {
  return (
    <Nav>
      <Nav.Link href="/">Strona główna</Nav.Link>
      <NavDropdown title="Oferta" id="basic-nav-dropdown">
        <NavDropdown.Item href="/aplikacje-webowe">Aplikacje Webowe</NavDropdown.Item>
        <NavDropdown.Item href="/strony-wordpress">Strony WordPress</NavDropdown.Item>
        <NavDropdown.Item href="/strony-niestandardowe">Strony niestandardowe</NavDropdown.Item>
        <NavDropdown.Item href="/sklepy-internetowe">Sklepy www</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link">Kontakt</Nav.Link>
      <Nav.Link href="#link">Blog</Nav.Link>
    </Nav>
  );
};

export default MenuDeskopt;
