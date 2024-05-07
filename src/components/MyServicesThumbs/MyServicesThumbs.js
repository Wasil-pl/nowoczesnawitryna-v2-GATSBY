import React from 'react';
import * as styles from './MyServicesThumbs.module.scss';
import './MyServicesThumbs.css';
import { Container, Tabs } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Tab } from 'bootstrap';

const MyServicesThumbs = () => {
  return (
    <div className={styles.myServicesThumbs}>
      <Container>
        <SectionTitle title="Wszystkie usługi, których" coloredText="potrzebujesz" variant="white" />

        <Tabs defaultActiveKey="1" variant="underline" justify className={` mb-3 ${styles.tabswrapper}`}>
          <Tab eventKey="1" title="Niestandardowe strony internetowe" className={styles.tab}>
            <div className={styles.tabContent}>
              <div className={styles.tabContentLeft}>
                <h3>Niestandardowe strony</h3>
                <p>
                  Oferuję tworzenie stron internetowych pisanych od zera, które są unikatowe, dostosowane do Twoich
                  wymagań i pozwalają wyróżnić się na tle konkurencji.
                </p>
                <p>
                  Jeżeli szukasz strony o perfekcyjnym dopasowaniu graficznym (pixel perfect), aplikacji typu single
                  page app (SPA) lub innego niestandardowego rozwiązania, to jesteś we właściwym miejscu.
                </p>
              </div>
              <div className={styles.tabContentRight}></div>
            </div>
          </Tab>
          <Tab eventKey="2" title="Aplikacje webowe" className={styles.tab}>
            <div className={styles.tabContent}>
              <div className={styles.tabContentLeft}>
                <h3>Aplikacje webowe</h3>
                <p>
                  Aplikacje webowe są idealne, gdy Twoje wymagania przekraczają możliwości tradycyjnych stron
                  internetowych. Jeżeli pragniesz interaktywnego narzędzia, które uprości codzienne zadania Twoich
                  klientów, albo potrzebujesz online’owej platformy stanowiącej serce Twojego biznesu – jestem tutaj,
                  aby sprostać Twoim oczekiwaniom.
                </p>
              </div>
              <div className={styles.tabContentRight}></div>
            </div>
          </Tab>
          <Tab eventKey="3" title="Strony WordPress" className={styles.tab}>
            <div className={styles.tabContent}>
              <div className={styles.tabContentLeft}>
                <h3>Strony oparte na WordPress</h3>
                <p>
                  Oferuję tworzenie stron internetowych opartych na WordPress, popularnym systemie zarządzania treścią.
                  Jeżeli potrzebujesz łatwo edytowalnej strony bez konieczności umiejętności kodowania, lub jeśli liczy
                  się dla Ciebie czas, ten wybór będzie idealnym rozwiązaniem.
                </p>
              </div>
              <div className={styles.tabContentRight}></div>
            </div>
          </Tab>
          <Tab eventKey="4" title="Sklepy internetowe" className={styles.tab}>
            <div className={styles.tabContent}>
              <div className={styles.tabContentLeft}>
                <h3>Sklepy internetowe</h3>
                <p>
                  Proponuję funkcjonalne i bezpieczne sklepy internetowe oparte na WooCommerce. Moje rozwiązania
                  umożliwiają łatwą sprzedaż produktów online, zarządzanie nimi i co najważniejsze są zgodne z
                  najnowszymi standardami e-commerce.
                </p>
              </div>
              <div className={styles.tabContentRight}></div>
            </div>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default MyServicesThumbs;
