import React, { useEffect, useState } from 'react';
import * as styles from './HeaderHome.module.scss';
import Menu from '../Menu/Menu';

const HeaderHome = ({ active }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window === undefined) return;
    if (window.innerWidth < 778) {
      setIsMobile(true);
    }
  }, []);

  return (
    <header className={styles.header}>
      <Menu active={active} />

      <div data-sal="zoom-in" data-sal-delay="300" data-sal-duration="2000" className={styles.content}>
        {!isMobile && (
          <h1 className={styles.title}>
            <span className={styles.title_top}>Tworzenie Nowoczesnych</span>
            <br />
            <span className={styles.title_bottom}>Stron Internetowych</span>
          </h1>
        )}
        {isMobile && (
          <h1 className={styles.title}>
            <span className={styles.title_top}>Tworzenie</span>
            <br />
            <span className={styles.title_bottom}>Nowoczesnych</span>
            <br />
            <span className={styles.title_top}>Stron</span>
            <br />
            <span className={styles.title_bottom}>Internetowych</span>
          </h1>
        )}

        <h2 className={styles.subtitle}>
          Profesjonalne strony internetowe i sklepy online
          <br />
          w Jastrzębiu-Zdroju, województwie śląskim oraz w całej Polsce,
          <br />
          które przyciągają i konwertują
        </h2>
      </div>
    </header>
  );
};

export default HeaderHome;
