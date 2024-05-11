import React, { useState, useEffect } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import * as styles from './Menu.module.scss';
import './menu.css';
import MenuDeskopt from './MenuDeskopt';
import MenuMobile from './MenuMobile';

const Menu = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window === undefined) return;
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    if (window === undefined) return;
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
          <img src="../../images/logo.svg" alt="Logo" width={80} />
        </Navbar.Brand>

        {!isMobile && <MenuDeskopt />}
        {isMobile && <MenuMobile />}
      </Container>
    </Navbar>
  );
};

export default Menu;
