import React, { useState } from 'react';
import './MyServicesThumbs.scss';
import { Tab } from '@headlessui/react';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../../../../Ui/CustomButton/CustomButton';
import { motion } from 'framer-motion';

const variants = {
  active: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  hidden: { opacity: 0, y: 8, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const MyServicesThumbs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const labels = [
    'Strony internetowe HTML',
    'Aplikacje webowe',
    'Strony Internetowe oparte na WordPress',
    'Sklepy internetowe',
    'Strony internetowe LMS – Nowoczesne Platformy Edukacyjne',
    'Projektowanie Logo',
  ];

  return (
    <div className="flex ">
      <Tab.Group defaultIndex={0} as="div" className="flex w-full" onChange={setTabIndex}>
        {/* Lista zakładek */}
        <Tab.List className="flex flex-col flex-[1_1_0%] min-w-0 h-fit mt-[50px] mr-[50px] z-10">
          {labels.map((label, i) => (
            <Tab
              key={i}
              className={`w-full text-center px-[20px] py-[15px]  rounded-[15px] mb-[20px] relative cursor-pointer transition-all duration-300 ease-in-out tab_button`}
            >
              <h3 className="text-[1.1rem] text-text-dark font-bold uppercase m-0">{label}</h3>
            </Tab>
          ))}
        </Tab.List>

        {/* Panele treści */}

        <Tab.Panels className="flex-[3_1_0%] min-w-0 z-10  ">
          {/* 1 */}
          <Tab.Panel unmount={false}>
            <motion.div variants={variants} animate={tabIndex === 0 ? 'active' : 'hidden'} className="h-full">
              <div className="mt-[50px] flex flex-col-reverse 2xl:flex-row pl-[20px] ">
                <div className="flex-[60%] tab_content ">
                  <h3 className="text-[2rem] font-bold text-text-primary mb-[50px] tab_content_h3">
                    Strony internetowe HTML
                  </h3>
                  <p className="text-[1rem] text-text-light mb-[20px] last:mb-[50px]">
                    Tworzę <strong>nowoczesne strony internetowe</strong> programowane od podstaw (HTML/SCSS/JS), w
                    pełni dostosowane do celów biznesowych i identyfikacji wizualnej marki. To rozwiązanie dla firm z
                    całej Polski, które chcą wyróżnić się unikatowym projektem i znakomitą wydajnością – bez kompromisów
                    narzuconych przez gotowe szablony.
                  </p>
                  <p className="text-[1rem] text-text-light mb-[50px]">
                    Potrzebujesz <strong>pixel-perfect</strong> layoutu, niestandardowych animacji lub aplikacji typu
                    SPA? Przygotowuję <strong>strony internetowe</strong>, które łączą dopracowany design, wysoką
                    szybkość działania oraz
                    <strong> SEO-friendly</strong> strukturę już na etapie projektu – tak, by łatwiej zdobywać pozycje i
                    klientów.
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
            </motion.div>
          </Tab.Panel>

          {/* 2 */}
          <Tab.Panel unmount={false}>
            <motion.div variants={variants} animate={tabIndex === 1 ? 'active' : 'hidden'} className="h-full">
              <div className="mt-[50px] flex flex-col-reverse 2xl:flex-row pl-[20px]">
                <div className="flex-[60%] tab_content">
                  <h3 className="text-[2rem] font-bold text-text-primary mb-[50px] tab_content_h3">Aplikacje webowe</h3>
                  <p className="text-[1rem] text-text-light mb-[50px]">
                    Gdy zwykła strona to za mało, projektuję i wdrażam <strong>aplikacje webowe</strong> (React/Next,
                    bazy danych MySQL lub MongoDB). Stawiam na wydajność, bezpieczeństwo oraz skalowalność – tak, aby
                    narzędzie realnie poprawiało procesy w firmie i doświadczenie użytkowników.
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
            </motion.div>
          </Tab.Panel>

          {/* 3 */}
          <Tab.Panel unmount={false}>
            <motion.div variants={variants} animate={tabIndex === 2 ? 'active' : 'hidden'} className="h-full">
              <div className="mt-[50px] flex flex-col-reverse 2xl:flex-row pl-[20px]">
                <div className="flex-[60%] tab_content">
                  <h3 className="text-[2rem] font-bold text-text-primary mb-[50px] tab_content_h3">
                    Strony Internetowe oparte na WordPress
                  </h3>
                  <p className="text-[1rem] text-text-light mb-[20px]">
                    Realizuję <strong>strony internetowe</strong> oparte na WordPress – najpopularniejszym CMS na
                    świecie. To świetna opcja, jeśli zależy Ci na łatwej edycji treści, blogu firmowym i szybkim starcie
                    bez rezygnowania z profesjonalnego wyglądu oraz dobrych praktyk <strong>SEO</strong>.
                  </p>
                  <p className="text-[1rem] text-text-light mb-[50px]">
                    Każdy projekt zawiera przejrzystą strukturę, zoptymalizowane nagłówki, lekkie grafiki i
                    przygotowanie pod pozycjonowanie – tak, aby <strong>strony internetowe WordPress</strong> budowały
                    widoczność marki w całej Polsce i wspierały cele sprzedażowe.
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
            </motion.div>
          </Tab.Panel>

          {/* 4 */}
          <Tab.Panel unmount={false}>
            <motion.div variants={variants} animate={tabIndex === 3 ? 'active' : 'hidden'} className="h-full">
              <div className="mt-[50px] flex flex-col-reverse 2xl:flex-row pl-[20px]">
                <div className="flex-[60%] tab_content">
                  <h3 className="text-[2rem] font-bold text-text-primary mb-[50px] tab_content_h3">
                    Sklepy internetowe
                  </h3>
                  <p className="text-[1rem] text-text-light mb-[20px]">
                    Projektuję <strong>sklepy internetowe</strong> oparte na WooCommerce: szybkie, bezpieczne i proste w
                    zarządzaniu. Dostajesz kompletny e-commerce z intuicyjną nawigacją, optymalnym procesem zakupu oraz
                    integracjami płatności i dostaw.
                  </p>
                  <p className="text-[1rem] text-text-light mb-[20px]">
                    Dbam o wydajność, UX i <strong>SEO</strong>, dzięki czemu Twój sklep lepiej konwertuje i rośnie wraz
                    z ofertą. Każdy projekt przygotowuję pod realne potrzeby – od małych butików po rozbudowane katalogi
                    produktów.
                  </p>
                  <p className="text-[1rem] text-text-light mb-[50px]">
                    W pakiecie otrzymujesz również niezbędne strony informacyjne (regulamin, polityka prywatności itp.),
                    aby prowadzić sprzedaż online w sposób zgodny z przepisami i standardami rynkowymi.
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
            </motion.div>
          </Tab.Panel>

          {/* 5 */}
          <Tab.Panel unmount={false}>
            <motion.div variants={variants} animate={tabIndex === 4 ? 'active' : 'hidden'} className="h-full">
              <div className="mt-[50px] flex flex-col-reverse 2xl:flex-row pl-[20px]">
                <div className="flex-[60%] tab_content">
                  <h3 className="text-[2rem] font-bold text-text-primary mb-[50px] tab_content_h3">
                    Strony Internetowe LMS – Nowoczesne Platformy Edukacyjne
                  </h3>
                  <p className="text-[1rem] text-text-light mb-[20px]">
                    Buduję <strong>platformy LMS</strong> do sprzedaży i prowadzenia kursów online: rejestracja
                    użytkowników, zarządzanie lekcjami i modułami, quizy, certyfikaty, raporty postępów oraz integracje
                    z płatnościami i webinarami.
                  </p>
                  <p className="text-[1rem] text-text-light mb-[50px]">
                    Projektuję strukturę pod <strong>SEO</strong>, aby kursy łatwiej docierały do odbiorców w całej
                    Polsce. Panel administracyjny jest prosty w obsłudze, więc możesz samodzielnie dodawać treści i
                    rozwijać ofertę bez wsparcia technicznego.
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
            </motion.div>
          </Tab.Panel>

          {/* 6 */}
          <Tab.Panel unmount={false}>
            <motion.div variants={variants} animate={tabIndex === 5 ? 'active' : 'hidden'} className="h-full">
              <div className="mt-[50px] flex flex-col-reverse 2xl:flex-row pl-[20px]">
                <div className="flex-[60%] tab_content">
                  <h3 className="text-[2rem] font-bold text-text-primary mb-[50px] tab_content_h3">
                    Projektowanie Logo
                  </h3>
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
            </motion.div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default MyServicesThumbs;
