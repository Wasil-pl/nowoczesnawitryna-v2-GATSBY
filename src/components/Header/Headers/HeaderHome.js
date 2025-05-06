import React, { Suspense, useState, useEffect } from 'react';
import Menu from '../Menu/Menu';
import { useMediaQuery } from 'react-responsive';
import { StaticImage } from 'gatsby-plugin-image';
import ShapeDividersBottom from '../../Ui/ShapeDividers/ShapeDividersBottom';
import { StaggeredFade } from '../../Ui/StaggeredFade/StaggeredFade';
import './HeaderHome.scss';
import ResponsiveSwitch from '../../Functions/ResponsiveSwitch';

const HeaderHome = ({ active }) => {
  const [ParticlesBg, setParticlesBg] = useState(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

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
        <h1 className="title text-[4rem] lg:text-[3rem] md:text-[2.5rem] font-extrabold uppercase leading-[1.2] tracking-[0.3rem] whitespace-nowrap">
          {!isMobile ? (
            <>
              <StaggeredFade text="Tworzenie Nowoczesnych" className="title_top" />
              <br />
              <StaggeredFade text="Stron Internetowych" className="title_bottom" />
            </>
          ) : (
            <>
              <StaggeredFade text="Tworzenie" className="title_top" />
              <br />
              <StaggeredFade text="Nowoczesnych" className="title_top" />
              <br />
              <StaggeredFade text="Stron" className="title_top" />
              <br />
              <StaggeredFade text="Internetowych" className="title_top" />
            </>
          )}
        </h1>

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
