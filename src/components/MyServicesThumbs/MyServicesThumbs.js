import React from 'react';
import * as styles from './MyServicesThumbs.module.scss';
import './MyServicesThumbs.css';
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../CustomButton/CustomButton';

const MyServicesThumbs = () => {
  return (
    <div className={styles.thums_container}>
      <Tabs defaultActiveKey="1" variant="underline" justify className={` mb-3 ${styles.tabs_wrapper}`}>
        <Tab eventKey="1" title="Strony internetowe HTML">
          <div className={styles.tab_content}>
            <div className={styles.tab_content_left}>
              <h3>Strony internetowe HTML</h3>
              <p>
                Oferuję <em>tworzenie stron internetowych</em> od podstaw, które są unikatowe, w pełni dostosowane do
                Twoich indywidualnych potrzeb i pozwalają Ci wyróżnić się na tle konkurencji. Moje niestandardowe strony
                internetowe to coś więcej niż standardowe szablony – każda strona jest tworzona z myślą o wyjątkowym
                designie i funkcjonalności.
              </p>
              <p>
                Jeśli szukasz strony internetowej z perfekcyjnym dopasowaniem graficznym (pixel perfect), zaawansowanej
                aplikacji typu single page app (SPA) lub innego niestandardowego rozwiązania, trafiłeś we właściwe
                miejsce. <em>Tworzę strony internetowe</em>, które spełniają najwyższe standardy zarówno pod względem
                estetyki, jak i użyteczności.
              </p>
              <CustomButton text="Zobacz więcej" link="/strony-niestandardowe/" />
            </div>
            <div className={styles.tab_content_right}>
              <StaticImage
                src="../../images/html.png"
                alt="strony kodowane od zera, strony internetowe html/css/JS"
                width={300}
              />
            </div>
          </div>
        </Tab>
        <Tab eventKey="2" title="Aplikacje webowe">
          <div className={styles.tab_content}>
            <div className={styles.tab_content_left}>
              <h3>Aplikacje webowe</h3>
              <p>
                Aplikacje webowe są idealne, gdy Twoje wymagania przekraczają możliwości tradycyjnych stron
                internetowych. Jeżeli pragniesz interaktywnego narzędzia, które uprości codzienne zadania Twoich
                klientów, albo potrzebujesz online’owej platformy stanowiącej serce Twojego biznesu – jestem tutaj, aby
                sprostać Twoim oczekiwaniom.
              </p>
              <CustomButton text="Zobacz więcej" link="/aplikacje-webowe/" />
            </div>
            <div className={styles.tab_content_right}>
              <StaticImage
                src="../../images/web-app.png"
                alt="aplikacje-webowe - strony internetowe na bazie aplikacji"
                width={300}
              />
            </div>
          </div>
        </Tab>
        <Tab eventKey="3" title="Strony Internetowe oparte na WordPress">
          <div className={styles.tab_content}>
            <div className={styles.tab_content_left}>
              <h3>Strony Internetowe oparte na WordPress</h3>
              <p>
                Oferuję <em>tworzenie stron internetowych</em> opartych na <em>WordPress</em>, jednym z
                najpopularniejszych systemów zarządzania treścią (CMS). Jeśli potrzebujesz łatwej w edycji strony
                internetowej, którą możesz zarządzać bez umiejętności kodowania, strony internetowe na WordPress będą
                dla Ciebie idealnym rozwiązaniem.
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
                src="../../images/cms.png"
                alt="strony wordpress - strony internetowe oparte na wordpress"
                width={300}
              />
            </div>
          </div>
        </Tab>
        <Tab eventKey="4" title="Sklepy internetowe">
          <div className={styles.tab_content}>
            <div className={styles.tab_content_left}>
              <h3>Sklepy internetowe</h3>
              <p>
                Oferuję funkcjonalne i bezpieczne <em>sklepy internetowe</em> oparte na WooCommerce, jednym z
                najpopularniejszych rozwiązań dla e-commerce. Moje sklepy internetowe umożliwiają łatwą sprzedaż
                produktów online oraz intuicyjne zarządzanie asortymentem.
              </p>
              <p>
                <em>Tworzę sklepy internetowe</em>, które są w pełni zgodne z najnowszymi standardami e-commerce,
                zapewniając płynne działanie i bezpieczeństwo transakcji. Dzięki moim rozwiązaniom możesz z łatwością
                rozwijać swoją sprzedaż online i dostosowywać sklep do potrzeb Twojej firmy.
              </p>
              <CustomButton text="Zobacz więcej" link="/sklepy-internetowe/" />
            </div>
            <div className={styles.tab_content_right}>
              <StaticImage src="../../images/ecommerce.png" alt="sklepy internetowe - sklepy online" width={300} />
            </div>
          </div>
        </Tab>
        <Tab eventKey="5" title="Strony LMS – Nowoczesne Platformy Edukacyjne">
          <div className={styles.tab_content}>
            <div className={styles.tab_content_left}>
              <h3>Strony LMS – Nowoczesne Platformy Edukacyjne</h3>
              <p>
                Oferuję tworzenie stron LMS (Learning Management System), które umożliwiają łatwe zarządzanie kursami
                online, uczniami oraz materiałami edukacyjnymi. Moje platformy LMS są idealne dla szkół, firm
                szkoleniowych oraz osób oferujących kursy online.
              </p>
              <p>
                Moje <em>strony LMS</em> oferują szeroką gamę funkcji, takich jak rejestracja użytkowników, zarządzanie
                kursami, quizami oraz certyfikatami. Dzięki prostemu w obsłudze panelowi możesz samodzielnie dodawać
                nowe kursy, monitorować postępy uczniów i łatwo zarządzać całą platformą. Tworzone przeze mnie strony są
                w pełni zoptymalizowane pod kątem SEO, co pozwala dotrzeć do większej liczby odbiorców, a dodatkowo
                umożliwiają integrację z narzędziami płatności, webinarami i mediami społecznościowymi.
              </p>
              <CustomButton text="Zobacz więcej" link="/strony-lms/" />
            </div>
            <div className={styles.tab_content_right}>
              <StaticImage
                src="../../images/lms.png"
                alt="strony LMS - strony internetowe do prowadzenia kursów online"
                width={300}
              />
            </div>
          </div>
        </Tab>
        <Tab eventKey="6" title="Projektowanie Logo">
          <div className={styles.tab_content}>
            <div className={styles.tab_content_left}>
              <h3>Projektowanie Logo</h3>
              <p>
                Oferuję profesjonalne <em>projektowanie logo</em>, które stanowi kluczowy element budowania wizerunku
                Twojej firmy. Każde logo, które tworzę, jest unikalne, dostosowane do charakteru marki i wyróżnia się
                nowoczesnym designem.
              </p>
              <p>
                Moje projekty logo są stworzone z myślą o wszechstronności – idealnie sprawdzają się zarówno w formatach
                cyfrowych, jak i drukowanych. Otrzymasz logo w wersji kolorowej, monochromatycznej oraz w różnych
                formatach (PNG, SVG, PDF). Projektuję logo, które buduje rozpoznawalność, przyciąga uwagę i oddaje
                wartości Twojej firmy.
              </p>
              <CustomButton text="Zobacz więcej" link="/projektowanie-logo/" />
            </div>
            <div className={styles.tab_content_right}>
              <StaticImage src="../../images/logo-min-white.png" alt="projektowanie logo" width={300} />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MyServicesThumbs;
