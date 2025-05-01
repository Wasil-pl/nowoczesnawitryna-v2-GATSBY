import React, { useEffect, useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../../../../Ui/CustomButton/CustomButton';
import * as styles from './MyServicesAccordion.module.scss';

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
    <div className={styles.wrapper}>
      {/* 1 */}
      <div className={styles.item}>
        <button
          onClick={() => setOpenIndex(openIndex === '0' ? null : '0')}
          className={styles.accordion_button}
          aria-expanded={openIndex === '0'}
        >
          <h3>Strony internetowe HTML</h3>
          {openIndex === '0' ? <ChevronUpIcon className={styles.icon} /> : <ChevronDownIcon className={styles.icon} />}
        </button>
        {openIndex === '0' && (
          <div id="panel-0">
            <div className={styles.tab_content}>
              <div className={styles.tab_content_left}>
                <h3>Strony internetowe HTML</h3>
                <p>
                  Oferuję strony interentowe programowane od podstaw, które są unikatowe, w pełni dostosowane do Twoich
                  indywidualnych potrzeb i pozwalają Ci wyróżnić się na tle konkurencji. Moje niestandardowe strony
                  internetowe to coś więcej niż standardowe szablony – każda strona jest tworzona z myślą o wyjątkowym
                  designie i funkcjonalności.
                </p>
                <p>
                  Jeśli szukasz nowoczesnej strony internetowej z perfekcyjnym dopasowaniem graficznym (pixel perfect),
                  zaawansowanej aplikacji typu single page app (SPA) lub innego niestandardowego rozwiązania, trafiłeś
                  we właściwe miejsce. Moje strony, spełniają najwyższe standardy zarówno pod względem estetyki, jak i
                  użyteczności.
                </p>
                <CustomButton text="Zobacz więcej" link="/strony-niestandardowe/" />
              </div>
              <div className={styles.tab_content_right}>
                <StaticImage src="../../../../../images/html.png" alt="strony kodowane od zera" width={300} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 2 */}
      <div className={styles.item}>
        <button
          onClick={() => setOpenIndex(openIndex === '1' ? null : '1')}
          className={styles.accordion_button}
          aria-expanded={openIndex === '1'}
        >
          <h3>Aplikacje webowe</h3>
          {openIndex === '1' ? <ChevronUpIcon className={styles.icon} /> : <ChevronDownIcon className={styles.icon} />}
        </button>
        {openIndex === '1' && (
          <div id="panel-1">
            <div className={styles.tab_content}>
              <div className={styles.tab_content_left}>
                <h3>Aplikacje webowe</h3>
                <p>
                  Aplikacje webowe to idealne rozwiązanie dla tych, którzy oczekują więcej niż oferują tradycyjne strony
                  internetowe. Dzięki zaawansowanym technologiom takim jak React, Redux, MySQL czy MongoDB, tworzę
                  szybkie, bezpieczne i niezawodne aplikacje webowe, które usprawnią działanie Twojej firmy oraz
                  pozytywnie wpłyną na doświadczenie Twoich klientów.
                </p>
                <CustomButton text="Zobacz więcej" link="/aplikacje-webowe/" />
              </div>
              <div className={styles.tab_content_right}>
                <StaticImage src="../../../../../images/web-app.png" alt="aplikacje webowe" width={300} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3 */}
      <div className={styles.item}>
        <button
          onClick={() => setOpenIndex(openIndex === '2' ? null : '2')}
          className={styles.accordion_button}
          aria-expanded={openIndex === '2'}
        >
          <h3>Strony Internetowe oparte na WordPress</h3>
          {openIndex === '2' ? <ChevronUpIcon className={styles.icon} /> : <ChevronDownIcon className={styles.icon} />}
        </button>
        {openIndex === '2' && (
          <div id="panel-2">
            <div className={styles.tab_content}>
              <div className={styles.tab_content_left}>
                <h3>Strony Internetowe oparte na WordPress</h3>
                <p>
                  Oferuję tworzenie stron internetowych opartych na WordPress, jednym z najpopularniejszych systemów
                  zarządzania treścią (CMS). Jeśli potrzebujesz łatwej w edycji strony internetowej, którą możesz
                  zarządzać bez umiejętności kodowania, strony internetowe na WordPress będą dla Ciebie idealnym
                  rozwiązaniem.
                </p>
                <p>
                  WordPress to doskonały wybór dla tych, którym zależy na szybkim uruchomieniu strony, przy jednoczesnym
                  zachowaniu pełnej elastyczności i możliwości rozbudowy. Dzięki stronom internetowym na WordPress,
                  zyskasz funkcjonalność, którą łatwo dostosujesz do potrzeb Twojego biznesu.
                </p>
                <CustomButton text="Zobacz więcej" link="/strony-wordpress/" />
              </div>
              <div className={styles.tab_content_right}>
                <StaticImage
                  src="../../../../../images/cms.png"
                  alt="strony wordpress - strony internetowe oparte na wordpress"
                  width={300}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4 */}
      <div className={styles.item}>
        <button
          onClick={() => setOpenIndex(openIndex === '3' ? null : '3')}
          className={styles.accordion_button}
          aria-expanded={openIndex === '3'}
        >
          <h3>Sklepy internetowe</h3>
          {openIndex === '3' ? <ChevronUpIcon className={styles.icon} /> : <ChevronDownIcon className={styles.icon} />}
        </button>
        {openIndex === '3' && (
          <div id="panel-3">
            <div className={styles.tab_content}>
              <div className={styles.tab_content_left}>
                <h3>Sklepy internetowe</h3>
                <p>
                  Oferuję funkcjonalne i bezpieczne sklepy internetowe oparte na WooCommerce, jednym z
                  najpopularniejszych rozwiązań dla e-commerce. Moje sklepy internetowe umożliwiają łatwą sprzedaż
                  produktów online oraz intuicyjne zarządzanie asortymentem.
                </p>
                <p>
                  Tworzę nowoczesne a zarazem profesjonalne sklepy internetowe, które są w pełni zgodne z najnowszymi
                  standardami e-commerce, zapewniając płynne działanie i bezpieczeństwo transakcji. Dzięki moim
                  rozwiązaniom możesz z łatwością rozwijać swoją sprzedaż online i dostosowywać sklep do potrzeb Twojej
                  firmy.
                </p>
                <p>
                  Wszystkie sklepy internetowe, które tworzę, są w pełni przygotowane do działania i sprzedaży online.
                  Oferuję kompletne rozwiązania, które zawierają wszystkie kluczowe elementy niezbędne do prowadzenia
                  sklepu internetowego. Każdy projekt obejmuje m.in. regulamin sklepu, politykę prywatności oraz inne
                  obowiązkowe informacje wymagane przez prawo polskie i unijne. Dzięki temu Twój sklep internetowy
                  będzie nie tylko funkcjonalny, ale także zgodny z obowiązującymi przepisami, co pozwoli Ci prowadzić
                  biznes w sposób bezpieczny i profesjonalny.
                </p>
                <CustomButton text="Zobacz więcej" link="/sklepy-internetowe/" />
              </div>
              <div className={styles.tab_content_right}>
                <StaticImage
                  src="../../../../../images/ecommerce.png"
                  alt="sklepy internetowe - sklepy online"
                  width={300}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 5 */}
      <div className={styles.item}>
        <button
          onClick={() => setOpenIndex(openIndex === '4' ? null : '4')}
          className={styles.accordion_button}
          aria-expanded={openIndex === '4'}
        >
          <h3>Strony Internetowe LMS – Nowoczesne Platformy Edukacyjne</h3>
          {openIndex === '4' ? <ChevronUpIcon className={styles.icon} /> : <ChevronDownIcon className={styles.icon} />}
        </button>
        {openIndex === '4' && (
          <div id="panel-4">
            <div className={styles.tab_content}>
              <div className={styles.tab_content_left}>
                <h3>Strony Internetowe LMS – Nowoczesne Platformy Edukacyjne</h3>
                <p>
                  Oferuję strony internetowe LMS (Learning Management System), które umożliwiają łatwe zarządzanie
                  kursami online, uczniami oraz materiałami edukacyjnymi. Moje platformy LMS są idealne dla szkół, firm
                  szkoleniowych oraz osób oferujących kursy online.
                </p>
                <p>
                  Moje strony LMS oferują szeroką gamę funkcji, takich jak rejestracja użytkowników, zarządzanie
                  kursami, quizami oraz certyfikatami. Dzięki prostemu w obsłudze panelowi możesz samodzielnie dodawać
                  nowe kursy, monitorować postępy uczniów i łatwo zarządzać całą platformą. Tworzone przeze mnie strony
                  są w pełni zoptymalizowane pod kątem SEO, co pozwala dotrzeć do większej liczby odbiorców, a dodatkowo
                  umożliwiają integrację z narzędziami płatności, webinarami i mediami społecznościowymi.
                </p>
                <CustomButton text="Zobacz więcej" link="/strony-lms/" />
              </div>
              <div className={styles.tab_content_right}>
                <StaticImage
                  src="../../../../../images/lms.png"
                  alt="strony LMS - strony internetowe do prowadzenia kursów online"
                  width={300}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 6 */}
      <div className={styles.item}>
        <button
          onClick={() => setOpenIndex(openIndex === '5' ? null : '5')}
          className={styles.accordion_button}
          aria-expanded={openIndex === '5'}
        >
          <h3>Projektowanie Logo</h3>
          {openIndex === '5' ? <ChevronUpIcon className={styles.icon} /> : <ChevronDownIcon className={styles.icon} />}
        </button>
        {openIndex === '5' && (
          <div id="panel-5">
            <div className={styles.tab_content}>
              <div className={styles.tab_content_left}>
                <h3>Projektowanie Logo</h3>
                <p>
                  Oferuję profesjonalne projektowanie logo, które stanowi kluczowy element budowania wizerunku Twojej
                  firmy. Każde logo, które tworzę, jest unikalne, dostosowane do charakteru marki i wyróżnia się
                  nowoczesnym designem.
                </p>
                <p>
                  Moje projekty logo są stworzone z myślą o wszechstronności – idealnie sprawdzają się zarówno w
                  formatach cyfrowych, jak i drukowanych. Otrzymasz logo w wersji kolorowej, monochromatycznej oraz w
                  różnych formatach (PNG, SVG, PDF). Projektuję logo, które buduje rozpoznawalność, przyciąga uwagę i
                  oddaje wartości Twojej firmy.
                </p>
                <CustomButton text="Zobacz więcej" link="/projektowanie-logo/" />
              </div>
              <div className={styles.tab_content_right}>
                <StaticImage src="../../../../../images/logo-min-white.png" alt="projektowanie logo" width={300} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyServicesAccordion;
