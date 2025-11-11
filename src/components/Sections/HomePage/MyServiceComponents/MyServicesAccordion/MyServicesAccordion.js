import React, { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../../../../Ui/CustomButton/CustomButton';
import './MyServicesAccordion.scss';
import { ChevronDownIcon, ChevronUpIcon } from '../../../../Icons/Icons';

const MyServicesAccordion = () => {
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
      {/* 1. HTML */}
      <div className="w-full mb-[20px]">
        <button
          className="accordion_button flex w-full max-w-[1200px] mx-auto justify-between items-center px-[20px] py-[10px]  rounded-[20px] border-none cursor-pointer transition-all duration-300 ease-in-out"
          aria-expanded={openIndex === '0'}
          onClick={() => setOpenIndex(openIndex === '0' ? null : '0')}
        >
          <h3 className="flex-[90%] m-0 text-[1.1rem] uppercase font-bold text-left">Strony internetowe HTML</h3>
          {openIndex === '0' ? (
            <ChevronUpIcon width={30} height={30} className="flex-[10%] " />
          ) : (
            <ChevronDownIcon width={30} height={30} className="flex-[10%] " />
          )}
        </button>
        {openIndex === '0' && (
          <div id="panel-0" className="mt-[70px] mb-[50px] flex flex-col-reverse">
            <div className="flex-1 flex flex-col">
              <h3 className="text-[2rem] font-bold accordion_title mb-[50px]">Strony internetowe HTML</h3>
              <p className="accordion_paragraph mb-[20px]">
                Tworzę <strong>nowoczesne strony internetowe</strong> programowane od podstaw (HTML/SCSS/JS), w pełni
                dostosowane do celów biznesowych i identyfikacji wizualnej marki. To rozwiązanie dla firm z całej
                Polski, które chcą wyróżnić się unikatowym projektem i znakomitą wydajnością – bez kompromisów
                narzuconych przez gotowe szablony.
              </p>
              <p className="accordion_paragraph mb-[50px]">
                Potrzebujesz <strong>pixel-perfect</strong> layoutu, niestandardowych animacji lub aplikacji typu SPA?
                Przygotowuję <strong>strony internetowe</strong>, które łączą dopracowany design, wysoką szybkość
                działania oraz
                <strong> SEO-friendly</strong> strukturę już na etapie projektu – tak, by łatwiej zdobywać pozycje i
                klientów.
              </p>
              <div className="flex justify-center">
                <CustomButton text="Zobacz więcej" link="/strony-niestandardowe/" />
              </div>
            </div>
            <div className="flex-1 text-center mb-[50px]">
              <StaticImage
                src="../../../../../images/html.png"
                alt="strony internetowe HTML — projekt od podstaw"
                width={300}
                quality={100}
                layout="constrained"
              />
            </div>
          </div>
        )}
      </div>

      {/* 2. Aplikacje webowe */}
      <div className="w-full mb-[20px]">
        <button
          className="accordion_button flex w-full max-w-[1200px] mx-auto justify-between items-center px-[20px] py-[10px]  rounded-[20px] border-none cursor-pointer transition-all duration-300 ease-in-out"
          aria-expanded={openIndex === '1'}
          onClick={() => setOpenIndex(openIndex === '1' ? null : '1')}
        >
          <h3 className="flex-[90%] m-0 text-[1.1rem] uppercase font-bold text-left">Aplikacje webowe</h3>
          {openIndex === '1' ? (
            <ChevronUpIcon width={30} height={30} className="flex-[10%] " />
          ) : (
            <ChevronDownIcon width={30} height={30} className="flex-[10%]" />
          )}
        </button>
        {openIndex === '1' && (
          <div id="panel-1" className="mt-[70px] mb-[50px] flex flex-col-reverse">
            <div className="flex-1 flex flex-col">
              <h3 className="text-[2rem] font-bold accordion_title mb-[50px]">Aplikacje webowe</h3>
              <p className="accordion_paragraph mb-[50px]">
                Gdy zwykła strona to za mało, projektuję i wdrażam <strong>aplikacje webowe</strong> (React/Next, bazy
                danych MySQL lub MongoDB). Stawiam na wydajność, bezpieczeństwo oraz skalowalność – tak, aby narzędzie
                realnie poprawiało procesy w firmie i doświadczenie użytkowników.
              </p>
              <div className="flex justify-center">
                <CustomButton text="Zobacz więcej" link="/aplikacje-webowe/" />
              </div>
            </div>
            <div className="flex-1 text-center mb-[50px]">
              <StaticImage
                src="../../../../../images/web-app.png"
                alt="aplikacje webowe"
                width={300}
                quality={100}
                layout="constrained"
              />
            </div>
          </div>
        )}
      </div>

      {/* 3. WordPress */}
      <div className="w-full mb-[20px]">
        <button
          className="accordion_button flex w-full max-w-[1200px] mx-auto justify-between items-center px-[20px] py-[10px]  rounded-[20px] border-none cursor-pointer transition-all duration-300 ease-in-out"
          aria-expanded={openIndex === '2'}
          onClick={() => setOpenIndex(openIndex === '2' ? null : '2')}
        >
          <h3 className="flex-[90%] m-0 text-[1.1rem] uppercase  font-bold text-left">
            Strony Internetowe oparte na WordPress
          </h3>
          {openIndex === '2' ? (
            <ChevronUpIcon width={30} height={30} className="flex-[10%] " />
          ) : (
            <ChevronDownIcon width={30} height={30} className="flex-[10%] " />
          )}
        </button>
        {openIndex === '2' && (
          <div id="panel-2" className="mt-[70px] mb-[50px] flex flex-col-reverse">
            <div className="flex-1 flex flex-col">
              <h3 className="text-[2rem] font-bold accordion_title mb-[50px]">
                Strony Internetowe oparte na WordPress
              </h3>
              <p className="accordion_paragraph mb-[20px]">
                Realizuję <strong>strony internetowe</strong> oparte na WordPress – najpopularniejszym CMS na świecie.
                To świetna opcja, jeśli zależy Ci na łatwej edycji treści, blogu firmowym i szybkim starcie bez
                rezygnowania z profesjonalnego wyglądu oraz dobrych praktyk <strong>SEO</strong>.
              </p>
              <p className="accordion_paragraph mb-[50px]">
                Każdy projekt zawiera przejrzystą strukturę, zoptymalizowane nagłówki, lekkie grafiki i przygotowanie
                pod pozycjonowanie – tak, aby <strong>strony internetowe WordPress</strong> budowały widoczność marki w
                całej Polsce i wspierały cele sprzedażowe.
              </p>
              <div className="flex justify-center">
                <CustomButton text="Zobacz więcej" link="/strony-wordpress/" />
              </div>
            </div>
            <div className="flex-1 text-center mb-[50px]">
              <StaticImage
                src="../../../../../images/cms.png"
                alt="strony wordpress - strony internetowe oparte na wordpress"
                width={300}
                quality={100}
                layout="constrained"
              />
            </div>
          </div>
        )}
      </div>

      {/* 4. Sklepy internetowe */}
      <div className="w-full mb-[20px]">
        <button
          className="accordion_button flex w-full max-w-[1200px] mx-auto justify-between items-center px-[20px] py-[10px]  rounded-[20px] border-none cursor-pointer transition-all duration-300 ease-in-out"
          aria-expanded={openIndex === '3'}
          onClick={() => setOpenIndex(openIndex === '3' ? null : '3')}
        >
          <h3 className="flex-[90%] m-0 text-[1.1rem] uppercase  font-bold text-left">Sklepy internetowe</h3>
          {openIndex === '3' ? (
            <ChevronUpIcon width={30} height={30} className="flex-[10%] " />
          ) : (
            <ChevronDownIcon width={30} height={30} className="flex-[10%] " />
          )}
        </button>
        {openIndex === '3' && (
          <div id="panel-3" className="mt-[70px] mb-[50px] flex flex-col-reverse">
            <div className="flex-1 flex flex-col">
              <h3 className="text-[2rem] font-bold accordion_title mb-[50px]">Sklepy internetowe</h3>
              <p className="accordion_paragraph mb-[20px]">
                Projektuję <strong>sklepy internetowe</strong> oparte na WooCommerce: szybkie, bezpieczne i proste w
                zarządzaniu. Dostajesz kompletny e-commerce z intuicyjną nawigacją, optymalnym procesem zakupu oraz
                integracjami płatności i dostaw.
              </p>
              <p className="accordion_paragraph mb-[20px]">
                Dbam o wydajność, UX i <strong>SEO</strong>, dzięki czemu Twój sklep lepiej konwertuje i rośnie wraz z
                ofertą. Każdy projekt przygotowuję pod realne potrzeby – od małych butików po rozbudowane katalogi
                produktów.
              </p>
              <p className="accordion_paragraph mb-[50px]">
                W pakiecie otrzymujesz również niezbędne strony informacyjne (regulamin, polityka prywatności itp.), aby
                prowadzić sprzedaż online w sposób zgodny z przepisami i standardami rynkowymi.
              </p>
              <div className="flex justify-center">
                <CustomButton text="Zobacz więcej" link="/sklepy-internetowe/" />
              </div>
            </div>
            <div className="flex-1 text-center mb-[50px]">
              <StaticImage
                src="../../../../../images/ecommerce.png"
                alt="sklepy internetowe - sklepy online"
                width={300}
                quality={100}
                layout="constrained"
              />
            </div>
          </div>
        )}
      </div>

      {/* 5. LMS */}
      <div className="w-full mb-[20px]">
        <button
          className="accordion_button flex w-full max-w-[1200px] mx-auto justify-between items-center px-[20px] py-[10px]  rounded-[20px] border-none cursor-pointer transition-all duration-300 ease-in-out"
          aria-expanded={openIndex === '4'}
          onClick={() => setOpenIndex(openIndex === '4' ? null : '4')}
        >
          <h3 className="flex-[90%] m-0 text-[1.1rem] uppercase  font-bold text-left">
            Strony Internetowe LMS – Nowoczesne Platformy Edukacyjne
          </h3>
          {openIndex === '4' ? (
            <ChevronUpIcon width={30} height={30} className="flex-[10%] " />
          ) : (
            <ChevronDownIcon width={30} height={30} className="flex-[10%] " />
          )}
        </button>
        {openIndex === '4' && (
          <div id="panel-4" className="mt-[70px] mb-[50px] flex flex-col-reverse">
            <div className="flex-1 flex flex-col">
              <h3 className="text-[2rem] font-bold accordion_title mb-[50px]">
                Strony Internetowe LMS – Nowoczesne Platformy Edukacyjne
              </h3>
              <p className="accordion_paragraph mb-[20px]">
                Buduję <strong>platformy LMS</strong> do sprzedaży i prowadzenia kursów online: rejestracja
                użytkowników, zarządzanie lekcjami i modułami, quizy, certyfikaty, raporty postępów oraz integracje z
                płatnościami i webinarami.
              </p>
              <p className="accordion_paragraph mb-[50px]">
                Projektuję strukturę pod <strong>SEO</strong>, aby kursy łatwiej docierały do odbiorców w całej Polsce.
                Panel administracyjny jest prosty w obsłudze, więc możesz samodzielnie dodawać treści i rozwijać ofertę
                bez wsparcia technicznego.
              </p>
              <div className="flex justify-center">
                <CustomButton text="Zobacz więcej" link="/strony-lms/" />
              </div>
            </div>
            <div className="flex-1 text-center mb-[50px]">
              <StaticImage
                src="../../../../../images/lms.png"
                alt="strony LMS - strony internetowe do prowadzenia kursów online"
                width={300}
                quality={100}
                layout="constrained"
              />
            </div>
          </div>
        )}
      </div>

      {/* 6. Logo */}
      <div className="w-full mb-[20px]">
        <button
          className="accordion_button flex w-full max-w-[1200px] mx-auto justify-between items-center px-[20px] py-[10px]  rounded-[20px] border-none cursor-pointer transition-all duration-300 ease-in-out"
          aria-expanded={openIndex === '5'}
          onClick={() => setOpenIndex(openIndex === '5' ? null : '5')}
        >
          <h3 className="flex-[90%] m-0 text-[1.1rem] uppercase  font-bold text-left">Projektowanie Logo</h3>
          {openIndex === '5' ? (
            <ChevronUpIcon width={30} height={30} className="flex-[10%] " />
          ) : (
            <ChevronDownIcon width={30} height={30} className="flex-[10%] " />
          )}
        </button>
        {openIndex === '5' && (
          <div id="panel-5" className="mt-[70px] mb-[50px] flex flex-col-reverse">
            <div className="flex-1 flex flex-col">
              <h3 className="text-[2rem] font-bold accordion_title mb-[50px]">Projektowanie Logo</h3>
              <p className="accordion_paragraph mb-[20px]">
                Oferuję profesjonalne projektowanie logo, które stanowi kluczowy element budowania wizerunku Twojej
                firmy. Każde logo, które tworzę, jest unikalne, dostosowane do charakteru marki i wyróżnia się
                nowoczesnym designem.
              </p>
              <p className="accordion_paragraph mb-[50px]">
                Moje projekty logo są stworzone z myślą o wszechstronności – idealnie sprawdzają się zarówno w formatach
                cyfrowych, jak i drukowanych. Otrzymasz logo w wersji kolorowej, monochromatycznej oraz w różnych
                formatach (PNG, SVG, PDF). Projektuję logo, które buduje rozpoznawalność, przyciąga uwagę i oddaje
                wartości Twojej firmy.
              </p>
              <div className="flex justify-center">
                <CustomButton text="Zobacz więcej" link="/projektowanie-logo/" />
              </div>
            </div>
            <div className="flex-1 text-center mb-[50px]">
              <StaticImage
                src="../../../../../images/logo-min-white.png"
                alt="projektowanie logo"
                width={300}
                quality={100}
                layout="constrained"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyServicesAccordion;
