import React, { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../../../Ui/CustomButton/CustomButton';
import { ChevronDownIcon, ChevronUpIcon } from '../../../Icons/Icons';

const LPMyServicesAccordion = ({
  title_HTML,
  description_HTML,
  title_web_apps,
  description_web_apps,
  title_wordpress,
  description_wordpress,
  title_ecommerce,
  description_ecommerce,
  title_lms,
  description_lms,
  title_logo,
  description_logo,
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (openIndex !== null) {
      const element = document.getElementById(`panel-${openIndex}`);
      if (element) {
        setTimeout(() => {
          const offset = element.getBoundingClientRect().top + window.scrollY - 200;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }, 300);
      }
    }
  }, [openIndex]);

  return (
    <div className="mt-[100px] relative z-10 flex flex-col items-center flex-wrap">
      {/* 1 */}
      <div className="w-full mb-[20px]">
        <button
          onClick={() => setOpenIndex(openIndex === '0' ? null : '0')}
          className="accordion_button flex w-full max-w-[1200px] mx-auto justify-between items-center px-[20px] py-[10px]  rounded-[20px] border-none cursor-pointer transition-all duration-300 ease-in-out"
          aria-expanded={openIndex === '0'}
        >
          <h3 className="flex-[90%] m-0 text-[1.1rem] uppercase font-bold text-left">Strony internetowe HTML</h3>
          {openIndex === '0' ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        {openIndex === '0' && (
          <div id="panel-0" className="mt-[70px] mb-[50px] flex flex-col-reverse">
            <div className="flex-1 flex flex-col">
              <h3 className="text-[2rem] font-bold accordion_title mb-[50px]">{title_HTML}</h3>
              {description_HTML.map((desc, i) => (
                <p className="accordion_paragraph mb-[20px]" key={i}>
                  {desc}
                </p>
              ))}
              <CustomButton text="Zobacz więcej" link="/strony-niestandardowe/" />
            </div>
            <div className="flex-1 text-center mb-[50px]">
              <StaticImage
                src="../../../../images/html.png"
                alt="strony kodowane od zera, strony internetowe html/css/JS"
                width={300}
              />
            </div>
          </div>
        )}
      </div>

      {/* 2 */}
      <div className="w-full mb-[20px]">
        <button
          onClick={() => setOpenIndex(openIndex === '1' ? null : '1')}
          className="accordion_button flex w-full max-w-[1200px] mx-auto justify-between items-center px-[20px] py-[10px]  rounded-[20px] border-none cursor-pointer transition-all duration-300 ease-in-out"
          aria-expanded={openIndex === '1'}
        >
          <h3 className="flex-[90%] m-0 text-[1.1rem] uppercase font-bold text-left">Aplikacje webowe</h3>
          {openIndex === '1' ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        {openIndex === '1' && (
          <div id="panel-1" className="mt-[70px] mb-[50px] flex flex-col-reverse">
            <div className="flex-1 flex flex-col">
              <h3 className="text-[2rem] font-bold accordion_title mb-[50px]">{title_web_apps}</h3>
              {description_web_apps.map((desc, i) => (
                <p className="accordion_paragraph mb-[20px]" key={i}>
                  {desc}
                </p>
              ))}
              <CustomButton text="Zobacz więcej" link="/aplikacje-webowe/" />
            </div>
            <div className="flex-1 text-center mb-[50px]">
              <StaticImage
                src="../../../../images/web-app.png"
                alt="aplikacje webowe - strony internetowe na bazie aplikacji"
                width={300}
              />
            </div>
          </div>
        )}
      </div>

      {/* 3 */}
      <div className="w-full mb-[20px]">
        <button
          onClick={() => setOpenIndex(openIndex === '2' ? null : '2')}
          className="accordion_button flex w-full max-w-[1200px] mx-auto justify-between items-center px-[20px] py-[10px]  rounded-[20px] border-none cursor-pointer transition-all duration-300 ease-in-out"
          aria-expanded={openIndex === '2'}
        >
          <h3 className="flex-[90%] m-0 text-[1.1rem] uppercase font-bold text-left">
            Strony Internetowe oparte na WordPress
          </h3>
          {openIndex === '2' ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        {openIndex === '2' && (
          <div id="panel-2" className="mt-[70px] mb-[50px] flex flex-col-reverse">
            <div className="flex-1 flex flex-col">
              <h3 className="text-[2rem] font-bold accordion_title mb-[50px]">{title_wordpress}</h3>
              {description_wordpress.map((desc, i) => (
                <p className="accordion_paragraph mb-[20px]" key={i}>
                  {desc}
                </p>
              ))}
              <CustomButton text="Zobacz więcej" link="/strony-wordpress/" />
            </div>
            <div className="flex-1 text-center mb-[50px]">
              <StaticImage
                src="../../../../images/cms.png"
                alt="strony wordpress - strony internetowe oparte na wordpress"
                width={300}
              />
            </div>
          </div>
        )}
      </div>

      {/* 4 */}
      <div className="w-full mb-[20px]">
        <button
          onClick={() => setOpenIndex(openIndex === '3' ? null : '3')}
          className="accordion_button flex w-full max-w-[1200px] mx-auto justify-between items-center px-[20px] py-[10px]  rounded-[20px] border-none cursor-pointer transition-all duration-300 ease-in-out"
          aria-expanded={openIndex === '3'}
        >
          <h3 className="flex-[90%] m-0 text-[1.1rem] uppercase font-bold text-left">Sklepy internetowe</h3>
          {openIndex === '3' ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        {openIndex === '3' && (
          <div id="panel-3" className="mt-[70px] mb-[50px] flex flex-col-reverse">
            <div className="flex-1 flex flex-col">
              <h3 className="text-[2rem] font-bold accordion_title mb-[50px]">{title_ecommerce}</h3>
              {description_ecommerce.map((desc, i) => (
                <p className="accordion_paragraph mb-[20px]" key={i}>
                  {desc}
                </p>
              ))}
              <CustomButton text="Zobacz więcej" link="/sklepy-internetowe/" />
            </div>
            <div className="flex-1 text-center mb-[50px]">
              <StaticImage
                src="../../../../images/ecommerce.png"
                alt="sklepy internetowe - sklepy online"
                width={300}
              />
            </div>
          </div>
        )}
      </div>

      {/* 5 */}
      <div className="w-full mb-[20px]">
        <button
          onClick={() => setOpenIndex(openIndex === '4' ? null : '4')}
          className="accordion_button flex w-full max-w-[1200px] mx-auto justify-between items-center px-[20px] py-[10px]  rounded-[20px] border-none cursor-pointer transition-all duration-300 ease-in-out"
          aria-expanded={openIndex === '4'}
        >
          <h3 className="flex-[90%] m-0 text-[1.1rem] uppercase font-bold text-left">
            Strony Internetowe LMS – Nowoczesne Platformy Edukacyjne
          </h3>
          {openIndex === '4' ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        {openIndex === '4' && (
          <div id="panel-4" className="mt-[70px] mb-[50px] flex flex-col-reverse">
            <div className="flex-1 flex flex-col">
              <h3 className="text-[2rem] font-bold accordion_title mb-[50px]">{title_lms}</h3>
              {description_lms.map((desc, i) => (
                <p className="accordion_paragraph mb-[20px]" key={i}>
                  {desc}
                </p>
              ))}
              <CustomButton text="Zobacz więcej" link="/strony-lms/" />
            </div>
            <div className="flex-1 text-center mb-[50px]">
              <StaticImage
                src="../../../../images/lms.png"
                alt="strony LMS - strony internetowe do prowadzenia kursów online"
                width={300}
              />
            </div>
          </div>
        )}
      </div>

      {/* 6 */}
      <div className="w-full mb-[20px]">
        <button
          onClick={() => setOpenIndex(openIndex === '5' ? null : '5')}
          className="accordion_button flex w-full max-w-[1200px] mx-auto justify-between items-center px-[20px] py-[10px]  rounded-[20px] border-none cursor-pointer transition-all duration-300 ease-in-out"
          aria-expanded={openIndex === '5'}
        >
          <h3 className="flex-[90%] m-0 text-[1.1rem] uppercase font-bold text-left">Projektowanie Logo</h3>
          {openIndex === '5' ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        {openIndex === '5' && (
          <div id="panel-5" className="mt-[70px] mb-[50px] flex flex-col-reverse">
            <div className="flex-1 flex flex-col">
              <h3 className="text-[2rem] font-bold accordion_title mb-[50px]">{title_logo}</h3>
              {description_logo.map((desc, i) => (
                <p className="accordion_paragraph mb-[20px]" key={i}>
                  {desc}
                </p>
              ))}
              <CustomButton text="Zobacz więcej" link="/projektowanie-logo/" />
            </div>
            <div className="flex-1 text-center mb-[50px]">
              <StaticImage src="../../../../images/logo-min-white.png" alt="projektowanie logo" width={300} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LPMyServicesAccordion;
