import React from 'react';
import loadable from '@loadable/component';
import Menu from '../Menu/Menu';
import ShapeDividersBottom from '../../Ui/ShapeDividers/ShapeDividersBottom';
import './Headers.scss';

const ParticlesBg = loadable(() => import('../../Ui/ParticlesBackground/ParticlesBackground'), {
  ssr: false,
  fallback: null,
});

const Headers = ({ title_top, title_middle, title_bottom, subtitle, active, variant }) => {
  const baseHeight = variant === 'landing_page' ? 'h-[90vh]' : 'h-[700px]';

  return (
    <header
      className={`headers relative ${baseHeight}
        bg-background-dark
        bg-[url('/images/hero_2.webp')]
        bg-cover bg-center bg-no-repeat`}
    >
      <Menu active={active} />

      <ParticlesBg id="tsparticles_other_heroes" />

      <div
        className="separator absolute top-1/2 left-1/2 
             -translate-x-1/2 -translate-y-[55%] z-10 
             flex flex-col items-center text-center px-4"
      >
        <h1
          className="title text-[2rem] md:text-[2.5rem] lg:text-[3rem]
               font-extrabold uppercase leading-[1.2] tracking-[0.3rem]"
        >
          <span className="title_top">{title_top}</span>
          <br />
          <span className="title_middle">{title_middle}</span>
          <br />
          <span className="title_bottom">{title_bottom}</span>
        </h1>

        <h2
          className="subtitle text-[1rem] md:text-[1.2rem] mt-8 
               tracking-[0.2rem] uppercase"
        >
          {subtitle}
        </h2>
      </div>

      <ShapeDividersBottom />
    </header>
  );
};

export default Headers;
