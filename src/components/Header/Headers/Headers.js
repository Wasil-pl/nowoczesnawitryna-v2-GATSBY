import React from 'react';
import loadable from '@loadable/component';
import ShapeDividersBottom from '../../Ui/ShapeDividers/ShapeDividersBottom';
import './Headers.scss';
import AnimatedHeadLine from './AnimatedHeadLine';

const ParticlesBg = loadable(() => import('../../Ui/ParticlesBackground/ParticlesBackground'), {
  ssr: false,
  fallback: null,
});

const Headers = ({ title_top, title_middle, title_bottom, subtitle, variant, crumbs, crumbLabel }) => {
  const LINES = [
    { text: title_top, light: false },
    { text: title_middle, light: false },
    { text: title_bottom, light: true },
  ];

  const SUBTITLE = subtitle;

  return (
    <header
      className={`headers relative 
        bg-background-dark
        bg-[url('/images/hero_2.webp')]
        bg-cover bg-center bg-no-repeat`}
    >
      <ParticlesBg id="tsparticles_other_heroes" />

      <AnimatedHeadLine
        lines={LINES}
        subtitle={SUBTITLE}
        h1ClassName="title text-[3.5rem] font-extrabold leading-[1.2] tracking-[0.3rem] text-left"
        showUnderline={true}
        crumbs={crumbs}
        crumbLabel={crumbLabel}
      />

      <ShapeDividersBottom />
    </header>
  );
};

export default Headers;
