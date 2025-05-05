import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../../Ui/CustomButton/CustomButton';
import { ChevronDownIcon, MenuBarsIcon } from '../../Icons/Icons';
import './MenuMobile.scss';

const MenuMobile = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <span className="menu_mobile flex flex-row gap-4">
      <CustomButton link="/formularz-szybkiej-wyceny/" text="Szybka Wycena" variant="small" />

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
            <a href="/" className="menu_image text-center mb-[30px]">
              <StaticImage src="../../../images/logo_kolo.png" alt="logo" width={150} />
            </a>

            <div className="lang flex justify-end">
              <a href="https://www.nowoczesnawitryna.com" className="lang-link hover:text-primary">
                EN
              </a>
              <a href="https://www.nowoczesnawitryna.pl/" className="lang-link activeMenuItem">
                PL
              </a>
            </div>

            <ul className="nav_list flex flex-col gap-4 mt-8">
              <li>
                <a
                  href="/"
                  className={`hover:text-primary text-[1.3rem] uppercase bg-transparent border-none p-0 cursor-pointer nav_link ${
                    active === 'home' ? 'activeMenuItem' : ''
                  }`}
                >
                  Strona Główna
                </a>
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
                      <a
                        key={key}
                        href={href}
                        className={`hover:text-primary nav_link ${active === key ? 'activeMenuItem' : ''}`}
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <a
                  href="/formularz-szybkiej-wyceny/"
                  className={`hover:text-primary nav_link text-[1.3rem] uppercase bg-transparent border-none p-0 cursor-pointer ${
                    active === 'formularz-wyceny' ? 'activeMenuItem' : ''
                  }`}
                >
                  Szybka Wycena
                </a>
              </li>
              <li>
                <a
                  href="/kontakt/"
                  className={`hover:text-primary nav_link text-[1.3rem] uppercase bg-transparent border-none p-0 cursor-pointer ${
                    active === 'kontakt' ? 'activeMenuItem' : ''
                  }`}
                >
                  Kontakt
                </a>
              </li>
              <li>
                <a
                  href="/blog/"
                  className={`hover:text-primary nav_link text-[1.3rem] uppercase bg-transparent border-none p-0 cursor-pointer ${
                    active === 'blog' ? 'activeMenuItem' : ''
                  }`}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </span>
  );
};

export default MenuMobile;
