import React from 'react';
import loadable from '@loadable/component';
import Menu from '../Menu/Menu';
import { StaticImage } from 'gatsby-plugin-image';
import ShapeDividersBottom from '../../Ui/ShapeDividers/ShapeDividersBottom';
import './HeaderHome.scss';
import ResponsiveSwitch from '../../Functions/ResponsiveSwitch';

const ParticlesBg = loadable(() => import('../../Ui/ParticlesBackground/ParticlesBackground'), {
  ssr: false,
  fallback: null,
});

const HeaderHome = ({ active }) => {
  return (
    <header className="header relative bg-background-dark bg-[url('/images/hero_2.webp')] bg-cover bg-center bg-no-repeat h-[95vh]">
      <Menu active={active} />

      <ParticlesBg id="tsparticles" />

      <ResponsiveSwitch
        desktop={
          <div className="logo absolute top-[5%] left-[5%] z-10">
            <a href="/" aria-label="Strona główna">
              <StaticImage
                src="../../../images/logo_ciemne.png"
                alt="logo"
                width={170}
                quality={100}
                layout="constrained"
                loading="eager"
              />
            </a>
          </div>
        }
        mobile={null}
        fallback={null}
      />

      <div className="content absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center flex flex-col">
        <ResponsiveSwitch
          desktop={
            <h1 className="title text-[4rem] lg:text-[3rem] md:text-[2.5rem] font-extrabold uppercase leading-[1.2] tracking-[0.3rem] whitespace-nowrap">
              <span className="title_top">Tworzenie Nowoczesnych</span>
              <br />
              <span className="title_bottom">Stron Internetowych</span>
            </h1>
          }
          mobile={
            <h1 className="title text-[4rem] lg:text-[3rem] md:text-[2.5rem] font-extrabold uppercase leading-[1.2] tracking-[0.3rem] whitespace-nowrap">
              <span className="title_top">Tworzenie</span>
              <br />
              <span className="title_bottom">Nowoczesnych</span>
              <br />
              <span className="title_top">Stron</span>
              <br />
              <span className="title_bottom">Internetowych</span>
            </h1>
          }
          fallback={null}
        />

        <h2 className="subtitle mt-[2rem] text-[1.4rem] lg:text-[1.2rem] md:text-[1rem] leading-[1.2] tracking-[0.2rem] uppercase text-text-light-dark">
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
