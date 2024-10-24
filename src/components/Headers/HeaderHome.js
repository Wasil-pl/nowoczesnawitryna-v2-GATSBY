import React from 'react';
import * as styles from './HeaderHome.module.scss';
import Menu from '../Menu/Menu';

const HeaderHome = ({ active }) => {
  return (
    <header className={styles.header}>
      <Menu active={active} />

      <div data-sal="zoom-in" data-sal-delay="300" data-sal-duration="2000" className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.title_top}>Tworzenie Nowoczesnych</span>
          <br />
          <span className={styles.title_bottom}>Stron Internetowych</span>
        </h1>
        <h2 className={styles.subtitle}>
          Profesjonalne strony internetowe,
          <br />
          które przyciągają i konwertują
        </h2>
      </div>
    </header>
  );
};

export default HeaderHome;
