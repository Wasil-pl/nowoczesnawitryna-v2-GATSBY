import React, { useEffect, useState } from 'react';
import * as styles from './Headers.module.scss';
import Menu from '../Menu/Menu';
import ShapeDividersBottom from '../../Ui/ShapeDividers/ShapeDividersBottom';
import { StaggeredFade } from '../../Ui/StaggeredFade/StaggeredFade';

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
          <StaggeredFade text={title_top} className={styles.title_top} />
          <br />
          <StaggeredFade text={title_middle} className={styles.title_middle} />
          <br />
          <StaggeredFade text={title_bottom} className={styles.title_bottom} />
        </h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>

      <ShapeDividersBottom />
    </header>
  );
};

export default Headers;
