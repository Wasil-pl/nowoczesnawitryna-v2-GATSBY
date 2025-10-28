import React from 'react';
import loadable from '@loadable/component';
import { StaticImage } from 'gatsby-plugin-image';
import ShapeDividersBottom from '../../Ui/ShapeDividers/ShapeDividersBottom';
import './HeaderHome.scss';
import ResponsiveSwitch from '../../Functions/ResponsiveSwitch';
import HeaderMotion from './HeaderMotion';

const ParticlesBg = loadable(() => import('../../Ui/ParticlesBackground/ParticlesBackground'), {
  ssr: false,
  fallback: null,
});

const HeaderHome = () => {
  return (
    <header className="header relative bg-background-dark bg-[url('/images/hero_2.webp')] bg-cover bg-center bg-no-repeat h-[95vh]">
      <ParticlesBg id="tsparticles" />

      <ResponsiveSwitch
        desktop={
          <div className="logo absolute top-[5%] left-[5%] z-10">
            <StaticImage
              src="../../../images/logo_ciemne.png"
              alt="logo - strona główna"
              width={170}
              quality={100}
              layout="constrained"
              loading="eager"
            />
          </div>
        }
        mobile={null}
        fallback={null}
      />

      <HeaderMotion />

      <ShapeDividersBottom />
    </header>
  );
};

export default HeaderHome;
