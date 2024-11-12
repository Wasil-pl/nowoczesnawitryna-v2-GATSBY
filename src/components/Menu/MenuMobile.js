import React, { useState } from 'react';
import { Button, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import * as styles from './MenuMobile.module.scss';
import './MenuMobile.css';
import { HouseFill, List } from 'react-bootstrap-icons';
import { StaticImage } from 'gatsby-plugin-image';

const MenuMobile = ({ active }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button className={styles.canvas_button} variant="primary" onClick={handleShow} aria-label="Menu">
        <List />
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.menu_wrapper}>
            <Navbar.Brand href="/" className={styles.menu_image}>
              <StaticImage src="../../images/logo_kolo.png" alt="logo" width={150} />
            </Navbar.Brand>
            <div className={styles.lang}>
              <a href="https://www.nowoczesnawitryna.com">EN</a>
              <a className={styles.active} href="https://www.nowoczesnawitryna.pl/">
                PL
              </a>
            </div>
            <Nav>
              <Nav.Link aria-label="strona główna" className={active === 'home' ? 'activeMenuItem' : ''} href="/">
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
              <Nav.Link
                className={active === 'formularz-wyceny' ? 'activeMenuItem' : ''}
                href="/formularz-szybkiej-wyceny/"
              >
                Szybka Wycena
              </Nav.Link>
              <Nav.Link className={active === 'kontakt' ? 'activeMenuItem' : ''} href="/kontakt/">
                Kontakt
              </Nav.Link>
              <Nav.Link className={active === 'blog' ? 'activeMenuItem' : ''} href="/blog/">
                Blog
              </Nav.Link>
            </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MenuMobile;
