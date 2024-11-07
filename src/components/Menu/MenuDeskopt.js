import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import './menu.css';
import { HouseFill } from 'react-bootstrap-icons';

const MenuDeskopt = ({ active }) => {
  return (
    <Nav>
      <Nav.Link className={active === 'home' ? 'activeMenuItem' : ''} href="/">
        <HouseFill />
      </Nav.Link>
      <NavDropdown title="Oferta" id="basic-nav-dropdown">
        <NavDropdown.Item className={active === 'aplikacje' ? 'activeMenuItem' : ''} href="/aplikacje-webowe/">
          Aplikacje Webowe
        </NavDropdown.Item>
        <NavDropdown.Item className={active === 'wordpress' ? 'activeMenuItem' : ''} href="/strony-wordpress/">
          Strony WordPress
        </NavDropdown.Item>
        <NavDropdown.Item className={active === 'html' ? 'activeMenuItem' : ''} href="/strony-niestandardowe/">
          Strony HTML/CSS/JS
        </NavDropdown.Item>
        <NavDropdown.Item className={active === 'sklep' ? 'activeMenuItem' : ''} href="/sklepy-internetowe/">
          Sklepy www
        </NavDropdown.Item>
        <NavDropdown.Item className={active === 'lms' ? 'activeMenuItem' : ''} href="/strony-lms/">
          Strony LMS
        </NavDropdown.Item>
        <NavDropdown.Item className={active === 'logo' ? 'activeMenuItem' : ''} href="/projektowanie-logo/">
          Projektowanie logo
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link className={active === 'formularz-wyceny' ? 'activeMenuItem' : ''} href="/formularz-szybkiej-wyceny/">
        Szybka Wycena
      </Nav.Link>
      <Nav.Link className={active === 'kontakt' ? 'activeMenuItem' : ''} href="/kontakt/">
        Kontakt
      </Nav.Link>
      <Nav.Link className={active === 'blog' ? 'activeMenuItem' : ''} href="/blog/">
        Blog
      </Nav.Link>
    </Nav>
  );
};

export default MenuDeskopt;
