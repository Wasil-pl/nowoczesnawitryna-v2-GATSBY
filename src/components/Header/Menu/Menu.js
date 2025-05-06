import React, { useState, useEffect } from 'react';
import MenuDeskopt from './MenuDeskopt';
import MenuMobile from './MenuMobile';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../../Ui/CustomButton/CustomButton';
import './Menu.scss';
import ResponsiveSwitch from '../../Functions/ResponsiveSwitch';

const Menu = ({ active }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed top-0 left-0 w-full z-50 py-4 px-8 ${scrollY > 50 ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <ResponsiveSwitch
          mobile={
            <a href="/">
              {scrollY > 50 && <StaticImage src="../../../images/logo.png" alt="logo" width={60} quality={100} />}
            </a>
          }
          desktop={
            <a href="/">
              {scrollY > 50 && <StaticImage src="../../../images/logo.png" alt="logo" width={100} quality={100} />}
            </a>
          }
          fallback={null}
        />

        <div className="menu_wrapper flex flex-col">
          <ResponsiveSwitch
            desktop={
              <div className="flex justify-end">
                <CustomButton link="/formularz-szybkiej-wyceny/" text="Szybka Wycena" variant="small" />
                <a
                  href="https://www.nowoczesnawitryna.com"
                  className="ml-2 text-text-light font-bold text-sm hover:text-primary"
                >
                  EN
                </a>
                <a href="https://www.nowoczesnawitryna.pl/" className="ml-2 text-primary font-bold text-sm">
                  PL
                </a>
              </div>
            }
            mobile={null}
            fallback={null}
          />

          <ResponsiveSwitch
            desktop={<MenuDeskopt active={active} />}
            mobile={<MenuMobile active={active} />}
            fallback={null}
          />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
