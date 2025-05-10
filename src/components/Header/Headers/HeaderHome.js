import React, { Suspense, useState, useEffect } from 'react';
import Menu from '../Menu/Menu';
import { StaticImage } from 'gatsby-plugin-image';
import ShapeDividersBottom from '../../Ui/ShapeDividers/ShapeDividersBottom';
import './HeaderHome.scss';
import ResponsiveSwitch from '../../Functions/ResponsiveSwitch';

const HeaderHome = ({ active }) => {
  const [ParticlesBg, setParticlesBg] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = () =>
        import('../../Ui/ParticlesBackground/ParticlesBackground').then((mod) => setParticlesBg(() => mod.default));

      if ('requestIdleCallback' in window) {
        requestIdleCallback(loader);
      } else {
        setTimeout(loader, 1000);
      }
    }
  }, []);

  return (
    <header className="header relative bg-background-dark bg-[url('/images/hero_2.webp')] bg-cover bg-center bg-no-repeat h-[95vh]">
      <Menu active={active} />

      {ParticlesBg && (
        <Suspense fallback={null}>
          <ParticlesBg id="tsparticles" />
        </Suspense>
      )}

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
              <span className="title_top" data-sal="slide-up" data-sal-delay="100" data-sal-duration="600">
                Tworzenie Nowoczesnych
              </span>
              <br />
              <span className="title_bottom" data-sal="slide-up" data-sal-delay="300" data-sal-duration="600">
                Stron Internetowych
              </span>
            </h1>
          }
          mobile={
            <h1 className="title text-[4rem] lg:text-[3rem] md:text-[2.5rem] font-extrabold uppercase leading-[1.2] tracking-[0.3rem] whitespace-nowrap">
              <span className="title_top" data-sal="slide-up" data-sal-delay="100" data-sal-duration="500">
                Tworzenie
              </span>
              <br />
              <span className="title_bottom" data-sal="slide-up" data-sal-delay="200" data-sal-duration="500">
                Nowoczesnych
              </span>
              <br />
              <span className="title_top" data-sal="slide-up" data-sal-delay="300" data-sal-duration="500">
                Stron
              </span>
              <br />
              <span className="title_bottom" data-sal="slide-up" data-sal-delay="400" data-sal-duration="500">
                Internetowych
              </span>
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
