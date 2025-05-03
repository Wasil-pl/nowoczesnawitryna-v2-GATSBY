import React, { useEffect, useState } from 'react';
import * as styles from './Headers.module.scss';
import Menu from '../Menu/Menu';
import ShapeDividersBottom from '../../Ui/ShapeDividers/ShapeDividersBottom';

const Headers = ({ title_top, title_middle, title_bottom, subtitle, active, variant }) => {
  const [ParticlesBg, setParticlesBg] = useState(null); // ← PRZENIESIONE WYŻEJ

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('../../Ui/ParticlesBackground/ParticlesBackground').then((mod) => {
        setParticlesBg(() => mod.default);
      });
    }
  }, []);

  return (
    <header className={`${styles.header} ${styles[variant]}`}>
      <Menu active={active} />

      {ParticlesBg && <ParticlesBg id="tsparticles_mobile" />}

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

      <ShapeDividersBottom />
    </header>
  );
};

export default Headers;
