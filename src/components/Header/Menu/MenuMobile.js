import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../../Ui/CustomButton/CustomButton';
import { ChevronDownIcon, MenuBarsIcon } from '../../Icons/Icons';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import './MenuMobile.scss';

const MenuMobile = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <span className="menu_mobile flex flex-row gap-4">
      <CustomButton link="/formularz-szybkiej-wyceny/#form" text="Szybka Wycena" variant="small" />

      <button
        className="canvas_button bg-transparent border rounded-[20%] text-[1.1rem] cursor-pointer px-[10px] py-[7px]"
        onClick={() => setIsOpen(true)}
        aria-label="Menu"
      >
        <MenuBarsIcon width="20px" height="20px" />
      </button>

      {isOpen && (
        <div className="offcanvas fixed top-0 right-0 w-[80vw] h-screen z-[9999] p-8 overflow-y-auto max-[460px]:w-screen">
          <button
            className="close absolute top-4 right-4 text-5xl bg-transparent border-none cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          <div className="flex flex-col">
            <div className="menu_image text-center mb-[30px]">
              <StaticImage src="../../../images/logo_kolo.png" alt="logo" width={150} />
            </div>

            <ul className="nav_list flex flex-col gap-4 mt-8">
              <li>
                <AniLink
                  paintDrip
                  duration={1.2} // czas całego przejścia
                  hex="#191919" // kolor „zalania” (może być też color="blue")
                  direction="left" // kierunek slideIn contentu po wejściu (opcjonalnie)
                  to="/"
                  className={`hover:text-primary text-[1.3rem] uppercase bg-transparent border-none p-0 cursor-pointer nav_link ${
                    active === 'home' ? 'activeMenuItem' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Strona Główna
                </AniLink>
              </li>

              <li className="dropdown flex flex-col gap-2">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`hover:text-primary dropdown_toggle flex items-center text-[1.3rem] uppercase bg-transparent border-none p-0 cursor-pointer nav_link  ${
                    active === 'oferta' ? 'activeMenuItem' : ''
                  }`}
                >
                  <span className="mr-1">Oferta</span>
                  <ChevronDownIcon width="20px" height="20px" className=" ml-2" />
                </button>

                {dropdownOpen && (
                  <div className="dropdown_menu_mobile flex flex-col pl-4 text-[1.3rem] uppercase bg-transparent border-none p-0 cursor-pointer">
                    {[
                      ['aplikacje', '/aplikacje-webowe/', 'Aplikacje Webowe'],
                      ['wordpress', '/strony-wordpress/', 'Strony WordPress'],
                      ['html', '/strony-niestandardowe/', 'Strony HTML/CSS/JS'],
                      ['sklep', '/sklepy-internetowe/', 'Sklepy www'],
                      ['lms', '/strony-lms/', 'Strony LMS'],
                      ['logo', '/projektowanie-logo/', 'Projektowanie logo'],
                    ].map(([key, href, label]) => (
                      <AniLink
                        paintDrip
                        duration={1.2} // czas całego przejścia
                        hex="#191919" // kolor „zalania” (może być też color="blue")
                        direction="left" // kierunek slideIn contentu po wejściu (opcjonalnie)
                        to={href}
                        key={key}
                        className={`hover:text-primary nav_link ${active === key ? 'activeMenuItem' : ''}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {label}
                      </AniLink>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <AniLink
                  paintDrip
                  duration={1.2} // czas całego przejścia
                  hex="#191919" // kolor „zalania” (może być też color="blue")
                  direction="left" // kierunek slideIn contentu po wejściu (opcjonalnie)
                  to="/formularz-szybkiej-wyceny/#form"
                  className={`hover:text-primary nav_link text-[1.3rem] uppercase bg-transparent border-none p-0 cursor-pointer ${
                    active === 'formularz-wyceny' ? 'activeMenuItem' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Szybka Wycena
                </AniLink>
              </li>
              <li>
                <AniLink
                  paintDrip
                  duration={1.2} // czas całego przejścia
                  hex="#191919" // kolor „zalania” (może być też color="blue")
                  direction="left" // kierunek slideIn contentu po wejściu (opcjonalnie)
                  to="/kontakt/"
                  className={`hover:text-primary nav_link text-[1.3rem] uppercase bg-transparent border-none p-0 cursor-pointer ${
                    active === 'kontakt' ? 'activeMenuItem' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Kontakt
                </AniLink>
              </li>
              <li>
                <AniLink
                  paintDrip
                  duration={1.2} // czas całego przejścia
                  hex="#191919" // kolor „zalania” (może być też color="blue")
                  direction="left" // kierunek slideIn contentu po wejściu (opcjonalnie)
                  to="/blog/"
                  className={`hover:text-primary nav_link text-[1.3rem] uppercase bg-transparent border-none p-0 cursor-pointer ${
                    active === 'blog' ? 'activeMenuItem' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </AniLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </span>
  );
};

export default MenuMobile;
