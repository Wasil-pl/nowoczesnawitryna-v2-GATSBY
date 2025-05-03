import React, { useState } from 'react';
import * as styles from './MenuMobile.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../../Ui/CustomButton/CustomButton';
import { MenuBarsIcon } from '../../Icons/Icons';

const MenuMobile = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <span className={styles.menu_mobile}>
      <CustomButton link={'/formularz-szybkiej-wyceny/'} text={'Szybka Wycena'} variant="small" />
      <button className={styles.canvas_button} onClick={() => setIsOpen(true)} aria-label="Menu">
        <MenuBarsIcon width="20px" height="20px" />
      </button>

      {isOpen && (
        <div className={styles.offcanvas}>
          <button className={styles.close} onClick={() => setIsOpen(false)}>
            &times;
          </button>
          <div className={styles.menu_wrapper}>
            <a href="/" className={styles.menu_image}>
              <StaticImage src="../../../images/logo_kolo.png" alt="logo" width={150} />
            </a>

            <div className={styles.lang}>
              <a href="https://www.nowoczesnawitryna.com">EN</a>
              <a className={styles.active} href="https://www.nowoczesnawitryna.pl/">
                PL
              </a>
            </div>

            <ul className={styles.nav_list}>
              <li>
                <a className={active === 'home' ? styles.activeMenuItem : ''} href="/">
                  Strona Główna
                </a>
              </li>

              <li className={styles.dropdown}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`${styles.dropdown_toggle} ${active === 'oferta' ? styles.activeMenuItem : ''}`}
                >
                  Oferta
                </button>
                {dropdownOpen && (
                  <div className={styles.dropdown_menu}>
                    <a className={active === 'aplikacje' ? styles.activeMenuItem : ''} href="/aplikacje-webowe/">
                      Aplikacje Webowe
                    </a>
                    <a className={active === 'wordpress' ? styles.activeMenuItem : ''} href="/strony-wordpress/">
                      Strony WordPress
                    </a>
                    <a className={active === 'html' ? styles.activeMenuItem : ''} href="/strony-niestandardowe/">
                      Strony HTML/CSS/JS
                    </a>
                    <a className={active === 'sklep' ? styles.activeMenuItem : ''} href="/sklepy-internetowe/">
                      Sklepy www
                    </a>
                    <a className={active === 'lms' ? styles.activeMenuItem : ''} href="/strony-lms/">
                      Strony LMS
                    </a>
                    <a className={active === 'logo' ? styles.activeMenuItem : ''} href="/projektowanie-logo/">
                      Projektowanie logo
                    </a>
                  </div>
                )}
              </li>

              <li>
                <a
                  className={active === 'formularz-wyceny' ? styles.activeMenuItem : ''}
                  href="/formularz-szybkiej-wyceny/"
                >
                  Szybka Wycena
                </a>
              </li>
              <li>
                <a className={active === 'kontakt' ? styles.activeMenuItem : ''} href="/kontakt/">
                  Kontakt
                </a>
              </li>
              <li>
                <a className={active === 'blog' ? styles.activeMenuItem : ''} href="/blog/">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </span>
  );
};

export default MenuMobile;
