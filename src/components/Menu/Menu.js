import React, { useState, useEffect } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import * as styles from './Menu.module.scss';
import './menu.css';
import MenuDeskopt from './MenuDeskopt';
import MenuMobile from './MenuMobile';
import { useMediaQuery } from 'react-responsive';

const Menu = ({ active }) => {
  const [scrollY, setScrollY] = useState(0);
  const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 999px)' });

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

        <div className={styles.menu_wrapper}>
          {isDesktop && (
            <div className={styles.lang}>
              <a href="https://nowoczesnawitryna.com">EN</a>
              <a className={styles.active} href="https://nowoczesnawitryna.pl/">
                PL
              </a>
            </div>
          )}
          {isDesktop && <MenuDeskopt active={active} />}
          {isMobile && <MenuMobile active={active} />}
        </div>
      </Container>
    </Navbar>
  );
};

export default Menu;
