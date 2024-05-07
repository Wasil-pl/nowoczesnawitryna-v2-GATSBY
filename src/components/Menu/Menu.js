import React, { useState, useEffect } from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import * as styles from './Menu.module.scss';
import './menu.css';
import { StaticImage } from 'gatsby-plugin-image';

const Menu = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      bg={scrollY > 50 ? '' : 'transparent'}
      data-bs-theme="dark"
      expand="lg"
      fixed="top"
      className={scrollY > 50 ? styles.scrolled : ''}
    >
      <Container>
        <Navbar.Brand href="/">
          <StaticImage src="../../images/logo.svg" alt="Logo" placeholder="blurred" layout="fixed" width={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Strona główna</Nav.Link>
            <NavDropdown title="Oferta" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Aplikacje Webowe</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Strony WordPress</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Strony niestandardowe</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sklepy www</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Kontakt</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
