import React, { useState } from 'react';
import { Button, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import * as styles from './MenuMobile.module.scss';
import './MenuMobile.css';
import { List } from 'react-bootstrap-icons';

const MenuMobile = () => {
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MenuMobile;
