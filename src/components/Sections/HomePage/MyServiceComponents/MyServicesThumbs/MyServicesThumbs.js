import React from 'react';
import './MyServicesThumbs.scss';
import { Tab } from '@headlessui/react';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../../../../Ui/CustomButton/CustomButton';

const MyServicesThumbs = () => {
  return (
    <div className="flex ">
      <Tab.Group defaultIndex={0} as="div" className="flex w-full">
        {/* Lista zakładek */}
        <Tab.List className="flex flex-col flex-[1_1_0%] min-w-0 h-fit mt-[50px] mr-[50px] z-10">
          {[
            'Strony internetowe HTML',
            'Aplikacje webowe',
            'Strony Internetowe oparte na WordPress',
            'Sklepy internetowe',
            'Strony internetowe LMS – Nowoczesne Platformy Edukacyjne',
            'Projektowanie Logo',
          ].map((label, i) => (
            <Tab
              key={i}
              className={`w-full text-center px-[20px] py-[15px]  rounded-[15px] mb-[20px] relative cursor-pointer transition-all duration-300 ease-in-out tab_button`}
            >
              <h3 className="text-[1.1rem] text-text-dark font-bold uppercase m-0">{label}</h3>
            </Tab>
          ))}
        </Tab.List>

        {/* Panele treści */}
        <Tab.Panels className="flex-[3_1_0%] min-w-0 z-10">
          {/* 1 */}
          <Tab.Panel>
            <div className="mt-[50px] flex flex-col-reverse 2xl:flex-row pl-[20px]">
              <div className="flex-[60%] tab_content">
                <h3 className="text-[2rem] font-bold text-text-primary mb-[50px] tab_content_h3">
                  Strony internetowe HTML
                </h3>
                <p className="text-[1rem] text-text-light mb-[20px] last:mb-[50px]">
                  Oferuję strony interentowe programowane od podstaw, które są unikatowe, w pełni dostosowane do Twoich
                  indywidualnych potrzeb i pozwalają Ci wyróżnić się na tle konkurencji. Moje niestandardowe strony
                  internetowe to coś więcej niż standardowe szablony – każda strona jest tworzona z myślą o wyjątkowym
                  designie i funkcjonalności.
                </p>
                <p className="text-[1rem] text-text-light mb-[50px]">
                  Jeśli szukasz nowoczesnej strony internetowej z perfekcyjnym dopasowaniem graficznym (pixel perfect),
                  zaawansowanej aplikacji typu single page app (SPA) lub innego niestandardowego rozwiązania, trafiłeś
                  we właściwe miejsce. Moje strony, spełniają najwyższe standardy zarówno pod względem estetyki, jak i
                  użyteczności.
                </p>
                <div className="flex justify-center">
                  <CustomButton text="Zobacz więcej" link="/strony-niestandardowe/" />
                </div>
              </div>
              <div className="flex-[40%] pl-0 mb-[20px] 2xl:pl-[50px] 2xl:mb-0 text-center">
                <StaticImage
                  src="../../../../../images/html.png"
                  alt="strony kodowane od zera, strony internetowe html/css/JS"
                  width={300}
                />
              </div>
            </div>
          </Tab.Panel>

          {/* 2 */}
          <Tab.Panel>
            <div className="mt-[50px] flex flex-col-reverse 2xl:flex-row pl-[20px]">
              <div className="flex-[60%] tab_content">
                <h3 className="text-[2rem] font-bold text-text-primary mb-[50px] tab_content_h3">Aplikacje webowe</h3>
                <p className="text-[1rem] text-text-light mb-[50px]">
                  Aplikacje webowe są idealne, gdy Twoje wymagania przekraczają możliwości tradycyjnych stron
                  internetowych. Jeżeli pragniesz interaktywnego narzędzia, które uprości codzienne zadania Twoich
                  klientów, albo potrzebujesz online’owej platformy stanowiącej serce Twojego biznesu – jestem tutaj,
                  aby sprostać Twoim oczekiwaniom.
                </p>
                <div className="flex justify-center">
                  <CustomButton text="Zobacz więcej" link="/aplikacje-webowe/" />
                </div>
              </div>
              <div className="flex-[40%] pl-0 mb-[20px] 2xl:pl-[50px] 2xl:mb-0 text-center">
                <StaticImage
                  src="../../../../../images/web-app.png"
                  alt="aplikacje-webowe - strony internetowe na bazie aplikacji"
                  width={300}
                />
              </div>
            </div>
          </Tab.Panel>

          {/* 3 */}
          <Tab.Panel>
            <div className="mt-[50px] flex flex-col-reverse 2xl:flex-row pl-[20px]">
              <div className="flex-[60%] tab_content">
                <h3 className="text-[2rem] font-bold text-text-primary mb-[50px] tab_content_h3">
                  Strony Internetowe oparte na WordPress
                </h3>
                <p className="text-[1rem] text-text-light mb-[20px]">
                  Oferuję tworzenie stron internetowych opartych na WordPress, jednym z najpopularniejszych systemów
                  zarządzania treścią (CMS). Jeśli potrzebujesz łatwej w edycji strony internetowej, którą możesz
                  zarządzać bez umiejętności kodowania, strony internetowe na WordPress będą dla Ciebie idealnym
                  rozwiązaniem.
                </p>
                <p className="text-[1rem] text-text-light mb-[50px]">
                  WordPress to doskonały wybór dla tych, którym zależy na szybkim uruchomieniu strony, przy jednoczesnym
                  zachowaniu pełnej elastyczności i możliwości rozbudowy. Dzięki stronom internetowym na WordPress,
                  zyskasz funkcjonalność, którą łatwo dostosujesz do potrzeb Twojego biznesu.
                </p>
                <div className="flex justify-center">
                  <CustomButton text="Zobacz więcej" link="/strony-wordpress/" />
                </div>
              </div>
              <div className="flex-[40%] pl-0 mb-[20px] 2xl:pl-[50px] 2xl:mb-0 text-center">
                <StaticImage
                  src="../../../../../images/cms.png"
                  alt="strony wordpress - strony internetowe oparte na wordpress"
                  width={300}
                />
              </div>
            </div>
          </Tab.Panel>

          {/* 4 */}
          <Tab.Panel>
            <div className="mt-[50px] flex flex-col-reverse 2xl:flex-row pl-[20px]">
              <div className="flex-[60%] tab_content">
                <h3 className="text-[2rem] font-bold text-text-primary mb-[50px] tab_content_h3">Sklepy internetowe</h3>
                <p className="text-[1rem] text-text-light mb-[20px]">
                  Oferuję funkcjonalne i bezpieczne sklepy internetowe oparte na WooCommerce, jednym z
                  najpopularniejszych rozwiązań dla e-commerce. Moje sklepy internetowe umożliwiają łatwą sprzedaż
                  produktów online oraz intuicyjne zarządzanie asortymentem.
                </p>
                <p className="text-[1rem] text-text-light mb-[20px]">
                  Tworzę nowoczesne a zarazem profesjonalne sklepy internetowe, które są w pełni zgodne z najnowszymi
                  standardami e-commerce, zapewniając płynne działanie i bezpieczeństwo transakcji. Dzięki moim
                  rozwiązaniom możesz z łatwością rozwijać swoją sprzedaż online i dostosowywać sklep do potrzeb Twojej
                  firmy.
                </p>
                <p className="text-[1rem] text-text-light mb-[50px]">
                  Wszystkie sklepy internetowe, które tworzę, są w pełni przygotowane do działania i sprzedaży online.
                  Oferuję kompletne rozwiązania, które zawierają wszystkie kluczowe elementy niezbędne do prowadzenia
                  sklepu internetowego. Każdy projekt obejmuje m.in. regulamin sklepu, politykę prywatności oraz inne
                  obowiązkowe informacje wymagane przez prawo polskie i unijne. Dzięki temu Twój sklep internetowy
                  będzie nie tylko funkcjonalny, ale także zgodny z obowiązującymi przepisami, co pozwoli Ci prowadzić
                  biznes w sposób bezpieczny i profesjonalny.
                </p>
                <div className="flex justify-center">
                  <CustomButton text="Zobacz więcej" link="/sklepy-internetowe/" />
                </div>
              </div>
              <div className="flex-[40%] pl-0 mb-[20px] 2xl:pl-[50px] 2xl:mb-0 text-center">
                <StaticImage
                  src="../../../../../images/ecommerce.png"
                  alt="sklepy internetowe - sklepy online"
                  width={300}
                />
              </div>
            </div>
          </Tab.Panel>

          {/* 5 */}
          <Tab.Panel>
            <div className="mt-[50px] flex flex-col-reverse 2xl:flex-row pl-[20px]">
              <div className="flex-[60%] tab_content">
                <h3 className="text-[2rem] font-bold text-text-primary mb-[50px] tab_content_h3">
                  Strony Internetowe LMS – Nowoczesne Platformy Edukacyjne
                </h3>
                <p className="text-[1rem] text-text-light mb-[20px]">
                  Oferuję strony internetowe LMS (Learning Management System), które umożliwiają łatwe zarządzanie
                  kursami online, uczniami oraz materiałami edukacyjnymi. Moje platformy LMS są idealne dla szkół, firm
                  szkoleniowych oraz osób oferujących kursy online.
                </p>
                <p className="text-[1rem] text-text-light mb-[50px]">
                  Moje strony LMS oferują szeroką gamę funkcji, takich jak rejestracja użytkowników, zarządzanie
                  kursami, quizami oraz certyfikatami. Dzięki prostemu w obsłudze panelowi możesz samodzielnie dodawać
                  nowe kursy, monitorować postępy uczniów i łatwo zarządzać całą platformą. Tworzone przeze mnie strony
                  są w pełni zoptymalizowane pod kątem SEO, co pozwala dotrzeć do większej liczby odbiorców, a dodatkowo
                  umożliwiają integrację z narzędziami płatności, webinarami i mediami społecznościowymi.
                </p>
                <div className="flex justify-center">
                  <CustomButton text="Zobacz więcej" link="/strony-lms/" />
                </div>
              </div>
              <div className="flex-[40%] pl-0 mb-[20px] 2xl:pl-[50px] 2xl:mb-0 text-center">
                <StaticImage
                  src="../../../../../images/lms.png"
                  alt="strony LMS - strony internetowe do prowadzenia kursów online"
                  width={300}
                />
              </div>
            </div>
          </Tab.Panel>

          {/* 6 */}
          <Tab.Panel>
            <div className="mt-[50px] flex flex-col-reverse 2xl:flex-row pl-[20px]">
              <div className="flex-[60%] tab_content">
                <h3 className="text-[2rem] font-bold text-text-primary mb-[50px] tab_content_h3">Projektowanie Logo</h3>
                <p className="text-[1rem] text-text-light mb-[20px]">
                  Oferuję profesjonalne projektowanie logo, które stanowi kluczowy element budowania wizerunku Twojej
                  firmy. Każde logo, które tworzę, jest unikalne, dostosowane do charakteru marki i wyróżnia się
                  nowoczesnym designem.
                </p>
                <p className="text-[1rem] text-text-light mb-[50px]">
                  Moje projekty logo są stworzone z myślą o wszechstronności – idealnie sprawdzają się zarówno w
                  formatach cyfrowych, jak i drukowanych. Otrzymasz logo w wersji kolorowej, monochromatycznej oraz w
                  różnych formatach (PNG, SVG, PDF). Projektuję logo, które buduje rozpoznawalność, przyciąga uwagę i
                  oddaje wartości Twojej firmy.
                </p>
                <div className="flex justify-center">
                  <CustomButton text="Zobacz więcej" link="/projektowanie-logo/" />
                </div>
              </div>
              <div className="flex-[40%] pl-0 mb-[20px] 2xl:pl-[50px] 2xl:mb-0 text-center">
                <StaticImage src="../../../../../images/logo-min-white.png" alt="projektowanie logo" width={300} />
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default MyServicesThumbs;
