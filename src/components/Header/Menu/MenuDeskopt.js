import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, HomeIcon } from '../../Icons/Icons';

const MenuDeskopt = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const linkBase = 'text-text-light text-[1.2rem] uppercase tracking-[0.1rem] hover:text-primary';

  return (
    <div className="menu_wrapper flex items-center justify-between gap-8 px-8 pt-4 w-full h-full">
      <a
        href="/"
        aria-label="strona główna"
        className={`${linkBase} ${active === 'home' ? 'text-primary' : ''} drop-shadow-md`}
      >
        <HomeIcon width="20px" height="20px" />
      </a>

      <div className="dropdown relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center ${linkBase} ${active === 'oferta' ? 'text-primary' : ''}`}
        >
          Oferta
          <ChevronDownIcon width="20px" height="20px" className="ml-2" />
        </button>
        {isOpen && (
          <div
            className="dropdown_menu absolute top-[150%] left-[-20px]
                          flex flex-col gap-2 p-4 rounded-md w-max z-50
                          bg-[rgba(25,29,41,0.75)] border-t-[3px] border-t-primary"
          >
            {[
              ['aplikacje', '/aplikacje-webowe/', 'Aplikacje Webowe'],
              ['wordpress', '/strony-wordpress/', 'Strony WordPress'],
              ['html', '/strony-niestandardowe/', 'Strony HTML/CSS/JS'],
              ['sklep', '/sklepy-internetowe/', 'Sklepy www'],
              ['lms', '/strony-lms/', 'Strony LMS'],
              ['logo', '/projektowanie-logo/', 'Projektowanie logo'],
            ].map(([key, href, label]) => (
              <a key={key} href={href} className={`${linkBase} ${active === key ? 'text-primary' : ''}`}>
                {label}
              </a>
            ))}
          </div>
        )}
      </div>

      {[
        ['formularz-wyceny', '/formularz-szybkiej-wyceny/', 'Szybka Wycena'],
        ['kontakt', '/kontakt/', 'Kontakt'],
        ['blog', '/blog/', 'Blog'],
      ].map(([key, href, label]) => (
        <a key={key} href={href} className={`${linkBase} ${active === key ? 'text-primary' : ''}`}>
          {label}
        </a>
      ))}
    </div>
  );
};

export default MenuDeskopt;
