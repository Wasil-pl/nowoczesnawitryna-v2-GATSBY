import React from 'react';
import * as styles from './Headers.module.scss';
import Menu from '../Menu/Menu';
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground';

const Headers = ({ title_top, title_middle, title_bottom, subtitle, active, variant }) => {
  return (
    <header className={`${styles.header} ${styles[variant]}`}>
      <Menu active={active} />

      <ParticlesBackground id={'tsparticles'} />

      <div className={`${styles.content} separator`}>
        <h1 className={styles.title}>
          <span className={styles.title_top}>{title_top}</span>
          <br />
          <span className={styles.title_middle}>{title_middle}</span>
          <br />
          <span className={styles.title_bottom}>{title_bottom}</span>
        </h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
    </header>
  );
};

export default Headers;
