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
                Oferuję strony interentowe programowane od podstaw, które są unikatowe, w pełni dostosowane do Twoich
                indywidualnych potrzeb i pozwalają Ci wyróżnić się na tle konkurencji. Moje niestandardowe strony
                internetowe to coś więcej niż standardowe szablony – każda strona jest tworzona z myślą o wyjątkowym
                designie i funkcjonalności.
              </p>
              <p className="accordion_paragraph mb-[50px]">
                Jeśli szukasz nowoczesnej strony internetowej z perfekcyjnym dopasowaniem graficznym (pixel perfect),
                zaawansowanej aplikacji typu single page app (SPA) lub innego niestandardowego rozwiązania, trafiłeś we
                właściwe miejsce. Moje strony, spełniają najwyższe standardy zarówno pod względem estetyki, jak i
                użyteczności.
              </p>
              <div className="flex justify-center">
                <CustomButton text="Zobacz więcej" link="/strony-niestandardowe/" />
              </div>
            </div>
            <div className="flex-1 text-center mb-[50px]">
              <StaticImage
                src="../../../../../images/html.png"
                alt="strony kodowane od zera"
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
                Aplikacje webowe to idealne rozwiązanie dla tych, którzy oczekują więcej niż oferują tradycyjne strony
                internetowe. Dzięki zaawansowanym technologiom takim jak React, Redux, MySQL czy MongoDB, tworzę
                szybkie, bezpieczne i niezawodne aplikacje webowe, które usprawnią działanie Twojej firmy oraz
                pozytywnie wpłyną na doświadczenie Twoich klientów.
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
                Oferuję tworzenie stron internetowych opartych na WordPress, jednym z najpopularniejszych systemów
                zarządzania treścią (CMS). Jeśli potrzebujesz łatwej w edycji strony internetowej, którą możesz
                zarządzać bez umiejętności kodowania, strony internetowe na WordPress będą dla Ciebie idealnym
                rozwiązaniem.
              </p>
              <p className="accordion_paragraph mb-[50px]">
                WordPress to doskonały wybór dla tych, którym zależy na szybkim uruchomieniu strony, przy jednoczesnym
                zachowaniu pełnej elastyczności i możliwości rozbudowy. Dzięki stronom internetowym na WordPress,
                zyskasz funkcjonalność, którą łatwo dostosujesz do potrzeb Twojego biznesu.
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
                Oferuję funkcjonalne i bezpieczne sklepy internetowe oparte na WooCommerce, jednym z najpopularniejszych
                rozwiązań dla e-commerce. Moje sklepy internetowe umożliwiają łatwą sprzedaż produktów online oraz
                intuicyjne zarządzanie asortymentem.
              </p>
              <p className="accordion_paragraph mb-[20px]">
                Tworzę nowoczesne a zarazem profesjonalne sklepy internetowe, które są w pełni zgodne z najnowszymi
                standardami e-commerce, zapewniając płynne działanie i bezpieczeństwo transakcji. Dzięki moim
                rozwiązaniom możesz z łatwością rozwijać swoją sprzedaż online i dostosowywać sklep do potrzeb Twojej
                firmy.
              </p>
              <p className="accordion_paragraph mb-[50px]">
                Wszystkie sklepy internetowe, które tworzę, są w pełni przygotowane do działania i sprzedaży online.
                Oferuję kompletne rozwiązania, które zawierają wszystkie kluczowe elementy niezbędne do prowadzenia
                sklepu internetowego. Każdy projekt obejmuje m.in. regulamin sklepu, politykę prywatności oraz inne
                obowiązkowe informacje wymagane przez prawo polskie i unijne. Dzięki temu Twój sklep internetowy będzie
                nie tylko funkcjonalny, ale także zgodny z obowiązującymi przepisami, co pozwoli Ci prowadzić biznes w
                sposób bezpieczny i profesjonalny.
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
                Oferuję strony internetowe LMS (Learning Management System), które umożliwiają łatwe zarządzanie kursami
                online, uczniami oraz materiałami edukacyjnymi. Moje platformy LMS są idealne dla szkół, firm
                szkoleniowych oraz osób oferujących kursy online.
              </p>
              <p className="accordion_paragraph mb-[50px]">
                Moje strony LMS oferują szeroką gamę funkcji, takich jak rejestracja użytkowników, zarządzanie kursami,
                quizami oraz certyfikatami. Dzięki prostemu w obsłudze panelowi możesz samodzielnie dodawać nowe kursy,
                monitorować postępy uczniów i łatwo zarządzać całą platformą. Tworzone przeze mnie strony są w pełni
                zoptymalizowane pod kątem SEO, co pozwala dotrzeć do większej liczby odbiorców, a dodatkowo umożliwiają
                integrację z narzędziami płatności, webinarami i mediami społecznościowymi.
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
