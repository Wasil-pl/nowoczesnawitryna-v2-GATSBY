import React from 'react';
import loadable from '@loadable/component';
import { StaticImage } from 'gatsby-plugin-image';
import ShapeDividersBottom from '../../Ui/ShapeDividers/ShapeDividersBottom';
import './HeaderHome.scss';
import ResponsiveSwitch from '../../Functions/ResponsiveSwitch';
import AnimatedHeadLine from './AnimatedHeadLine';

const ParticlesBg = loadable(() => import('../../Ui/ParticlesBackground/ParticlesBackground'), {
  ssr: false,
  fallback: null,
});

const LINES = [
  { text: 'Nowoczesne', light: false },
  { text: 'Strony', light: false },
  { text: 'internetowe', light: false },
  { text: 'Dla firm', light: true },
  { text: 'z całej Polski', light: true },
];

const SUBTITLE =
  'Tworzę strony internetowe, które skutecznie przyciągają klientów i budują wizerunek Twojej marki online. Realizuję nowoczesne projekty stron i sklepów internetowych dla firm z całej Polski - od Jastrzębia-Zdroju po Warszawę.';

const HeaderHome = ({ crumbs, location }) => {
  return (
    <header className="header relative bg-background-dark bg-[url('/images/hero_2.webp')] bg-cover bg-center bg-no-repeat ">
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

      <AnimatedHeadLine lines={LINES} subtitle={SUBTITLE} crumbs={crumbs} location={location} />

      <ShapeDividersBottom />
    </header>
  );
};

export default HeaderHome;
