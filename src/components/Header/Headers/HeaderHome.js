import React, { useState, useEffect } from 'react'; // ← TO BYŁO POTRZEBNE
import * as styles from './HeaderHome.module.scss';
import Menu from '../Menu/Menu';
import { useMediaQuery } from 'react-responsive';
import { StaticImage } from 'gatsby-plugin-image';
import ShapeDividersBottom from '../../Ui/ShapeDividers/ShapeDividersBottom';
import { StaggeredFade } from '../../Ui/StaggeredFade/StaggeredFade';

const HeaderHome = ({ active }) => {
  const [ParticlesBg, setParticlesBg] = useState(null); // ← PRZENIESIONE WYŻEJ
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('../../Ui/ParticlesBackground/ParticlesBackground').then((mod) => {
        setParticlesBg(() => mod.default);
      });
    }
  }, []);

  return (
    <header className={styles.header}>
      <Menu active={active} />

      {ParticlesBg && <ParticlesBg id="tsparticles" />}

      <div className={styles.logo}>
        <a href="/" aria-label="Strona główna">
          <StaticImage src="../../../images/logo_ciemne.png" alt="logo" width={170} quality={100} />
        </a>
      </div>

      <div data-sal="fade" data-sal-delay="100" data-sal-duration="2000" className={styles.content}>
        {!isMobile && (
          <h1 className={styles.title}>
            <StaggeredFade text="Tworzenie Nowoczesnych" className={styles.title_top} />
            <br />
            <StaggeredFade text="Stron Internetowych" className={styles.title_bottom} />
          </h1>
        )}
        {isMobile && (
          <h1 className={styles.title}>
            <StaggeredFade text="Tworzenie" className={styles.title_top} />
            <br />
            <StaggeredFade text=" Nowoczesnych" className={styles.title_top} />
            <br />
            <StaggeredFade text="Stron" className={styles.title_top} />
            <br />
            <StaggeredFade text=" Internetowych" className={styles.title_top} />
          </h1>
        )}

        <h2 className={styles.subtitle}>
          Profesjonalne strony internetowe i sklepy online.
          <br />
          Świadczę usługi dla klientów
          <br />w Jastrzębiu-Zdroju, województwie śląskim oraz w całej Polsce.
        </h2>
      </div>

      <ShapeDividersBottom />
    </header>
  );
};

export default HeaderHome;
