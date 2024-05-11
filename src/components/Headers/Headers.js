import React from 'react';
import * as styles from './Headers.module.scss';
import Menu from '../Menu/Menu';

const Headers = ({ title, subtitle }) => {
  return (
    <header className={styles.header}>
      <Menu />

      <div data-sal="zoom-in" data-sal-delay="300" data-sal-duration="2000" className={`${styles.content} separator`}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
    </header>
  );
};

export default Headers;
