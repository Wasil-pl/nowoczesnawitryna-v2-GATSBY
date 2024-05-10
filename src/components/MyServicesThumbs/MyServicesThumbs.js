import React from 'react';
import * as styles from './MyServicesThumbs.module.scss';
import './MyServicesThumbs.css';
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../CustomButton/CustomButton';

const MyServicesThumbs = () => {
  return (
    <Tabs defaultActiveKey="1" variant="underline" justify className={` mb-3 ${styles.tabswrapper}`}>
      <Tab eventKey="1" title="Niestandardowe strony internetowe">
        <div className={styles.tabContent}>
          <div className={styles.tabContentLeft}>
            <h3>Niestandardowe strony</h3>
            <p>
              Oferuję tworzenie stron internetowych pisanych od zera, które są unikatowe, dostosowane do Twoich wymagań
              i pozwalają wyróżnić się na tle konkurencji.
            </p>
            <p>
              Jeżeli szukasz strony o perfekcyjnym dopasowaniu graficznym (pixel perfect), aplikacji typu single page
              app (SPA) lub innego niestandardowego rozwiązania, to jesteś we właściwym miejscu.
            </p>
            <CustomButton text="Zobacz więcej" link="/#" />
          </div>
          <div className={styles.tabContentRight}>
            <StaticImage src="../../images/stronyniestandardowe.jpg" alt="strony niestandardowe" />
          </div>
        </div>
      </Tab>
      <Tab eventKey="2" title="Aplikacje webowe">
        <div className={styles.tabContent}>
          <div className={styles.tabContentLeft}>
            <h3>Aplikacje webowe</h3>
            <p>
              Aplikacje webowe są idealne, gdy Twoje wymagania przekraczają możliwości tradycyjnych stron internetowych.
              Jeżeli pragniesz interaktywnego narzędzia, które uprości codzienne zadania Twoich klientów, albo
              potrzebujesz online’owej platformy stanowiącej serce Twojego biznesu – jestem tutaj, aby sprostać Twoim
              oczekiwaniom.
            </p>
            <CustomButton text="Zobacz więcej" link="/aplikacje-webowe" />
          </div>
          <div className={styles.tabContentRight}>
            <StaticImage src="../../images/serwis-muzyczny.webp" alt="serwis muzyczny" width={300} />
          </div>
        </div>
      </Tab>
      <Tab eventKey="3" title="Strony WordPress">
        <div className={styles.tabContent}>
          <div className={styles.tabContentLeft}>
            <h3>Strony oparte na WordPress</h3>
            <p>
              Oferuję tworzenie stron internetowych opartych na WordPress, popularnym systemie zarządzania treścią.
              Jeżeli potrzebujesz łatwo edytowalnej strony bez konieczności umiejętności kodowania, lub jeśli liczy się
              dla Ciebie czas, ten wybór będzie idealnym rozwiązaniem.
            </p>
            <CustomButton text="Zobacz więcej" link="/strony-wordpress" />
          </div>
          <div className={styles.tabContentRight}>
            <StaticImage src="../../images/wordpress.jpg" alt="strony wordpress" />
          </div>
        </div>
      </Tab>
      <Tab eventKey="4" title="Sklepy internetowe">
        <div className={styles.tabContent}>
          <div className={styles.tabContentLeft}>
            <h3>Sklepy internetowe</h3>
            <p>
              Proponuję funkcjonalne i bezpieczne sklepy internetowe oparte na WooCommerce. Moje rozwiązania umożliwiają
              łatwą sprzedaż produktów online, zarządzanie nimi i co najważniejsze są zgodne z najnowszymi standardami
              e-commerce.
            </p>
            <CustomButton text="Zobacz więcej" link="/sklepy-internetowe" />
          </div>
          <div className={styles.tabContentRight}>
            <StaticImage src="../../images/sklep.jpg" alt="sklepy internetowe" />
          </div>
        </div>
      </Tab>
    </Tabs>
  );
};

export default MyServicesThumbs;
