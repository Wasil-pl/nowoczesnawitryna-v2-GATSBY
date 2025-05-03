import React, { useState, useRef, useEffect } from 'react';
import { BsHouseFill } from 'react-icons/bs';
import * as styles from './MenuDeskopt.module.scss';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const MenuDeskopt = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // zamykanie przy kliknięciu poza dropdownem
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.menu_wrapper}>
      <a href="/" className={active === 'home' ? styles.activeMenuItem : ''} aria-label="strona główna">
        <BsHouseFill />
      </a>

      <div className={styles.dropdown} ref={dropdownRef}>
        <button
          className={`${styles.dropdown_toggle} ${active === 'oferta' ? styles.activeMenuItem : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          Oferta
          <ChevronDownIcon />
        </button>
        {isOpen && (
          <div className={styles.dropdown_menu}>
            <a href="/aplikacje-webowe/" className={active === 'aplikacje' ? styles.activeMenuItem : ''}>
              Aplikacje Webowe
            </a>
            <a href="/strony-wordpress/" className={active === 'wordpress' ? styles.activeMenuItem : ''}>
              Strony WordPress
            </a>
            <a href="/strony-niestandardowe/" className={active === 'html' ? styles.activeMenuItem : ''}>
              Strony HTML/CSS/JS
            </a>
            <a href="/sklepy-internetowe/" className={active === 'sklep' ? styles.activeMenuItem : ''}>
              Sklepy www
            </a>
            <a href="/strony-lms/" className={active === 'lms' ? styles.activeMenuItem : ''}>
              Strony LMS
            </a>
            <a href="/projektowanie-logo/" className={active === 'logo' ? styles.activeMenuItem : ''}>
              Projektowanie logo
            </a>
          </div>
        )}
      </div>

      <a href="/formularz-szybkiej-wyceny/" className={active === 'formularz-wyceny' ? styles.activeMenuItem : ''}>
        Szybka Wycena
      </a>
      <a href="/kontakt/" className={active === 'kontakt' ? styles.activeMenuItem : ''}>
        Kontakt
      </a>
      <a href="/blog/" className={active === 'blog' ? styles.activeMenuItem : ''}>
        Blog
      </a>
    </div>
  );
};

export default MenuDeskopt;
