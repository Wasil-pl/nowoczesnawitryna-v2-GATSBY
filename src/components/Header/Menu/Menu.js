import React, { useState, useEffect } from 'react';
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
    <nav className={`${styles.navbar} ${scrollY > 50 ? styles.scrolled : ''}`}>
      <div className={`container mx-auto px-4 ${styles.container}`}>
        <a href="/">
          {scrollY > 50 && <StaticImage src="../../../images/logo.png" alt="logo" width={100} quality={100} />}
        </a>

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
      </div>
    </nav>
  );
};

export default Menu;
