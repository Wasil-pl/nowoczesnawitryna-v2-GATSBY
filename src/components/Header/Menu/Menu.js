import React, { useState, useEffect } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './menu.scss';
import * as styles from './Menu.module.scss';
import MenuDeskopt from './MenuDeskopt';
import MenuMobile from './MenuMobile';
import { useMediaQuery } from 'react-responsive';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../../Ui/CustomButton/CustomButton';

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
          <StaticImage src="../../images/logo_menu.png" alt="logo" width={80} quality={100} />
        </Navbar.Brand>

        <div className={styles.menu_wrapper}>
          {isDesktop && (
            <div className={styles.lang}>
              <CustomButton link={'/formularz-szybkiej-wyceny/'} text={'Szybka Wycena'} variant="small" />
              <a href="https://www.nowoczesnawitryna.com">EN</a>
              <a className={styles.active} href="https://www.nowoczesnawitryna.pl/">
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
