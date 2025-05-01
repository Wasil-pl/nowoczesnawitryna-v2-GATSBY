import React from 'react';
import * as styles from './HeaderHome.module.scss';
import Menu from '../Menu/Menu';
import { useMediaQuery } from 'react-responsive';
import ParticlesBackground from '../../Ui/ParticlesBackground/ParticlesBackground';

const HeaderHome = ({ active }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <header className={styles.header}>
      <Menu active={active} />

      <ParticlesBackground id={'tsparticles'} />

      <div data-sal="fade" data-sal-delay="100" data-sal-duration="2000" className={styles.content}>
        {!isMobile && (
          <h1 className={styles.title}>
            <span className={styles.title_top}>Tworzenie Nowoczesnych</span>
            <br />
            <span className={styles.title_bottom}> Stron Internetowych</span>
          </h1>
        )}
        {isMobile && (
          <h1 className={styles.title}>
            <span className={styles.title_top}>Tworzenie</span>
            <br />
            <span className={styles.title_bottom}> Nowoczesnych</span>
            <br />
            <span className={styles.title_top}> Stron</span>
            <br />
            <span className={styles.title_bottom}> Internetowych</span>
          </h1>
        )}

        <h2 className={styles.subtitle}>
          Profesjonalne strony internetowe i sklepy online.
          <br />
          Świadczę usługi dla klientów
          <br />w Jastrzębiu-Zdroju, województwie śląskim oraz w całej Polsce.
        </h2>
      </div>
    </header>
  );
};

export default HeaderHome;
