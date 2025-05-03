import React from 'react';
import * as styles from './ServicesInfo.module.scss';

import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';

const ServicesInfo = ({ html, wordpress }) => {
  return (
    <section className={styles.services_info}>
      <div className="container mx-auto px-4">
        <div className={styles.wrapper}>
          <div
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={`${styles.card} ${styles.down}`}
          >
            <SectionTitle title="Mój serwis" subtitle="Jak to wygląda?" />
          </div>
          {html && (
            <div
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
              className={`${styles.card} ${styles.up}`}
            >
              <StaticImage
                src="../../images/kod.webp"
                alt="zdjęcie przedstawiające ręczne pisanie kodu strony internetowej"
                width={330}
                height={440}
              />
              <div className={styles.card_text}>
                <h3>Czysty i Estetyczny kod</h3>
                <p>
                  <em>Tworzę strony internetowe</em> oparte na czystym, czytelnym kodzie. To nie tylko ułatwia przyszłe
                  modyfikacje, ale także pozytywnie wpływa na pozycjonowanie w wynikach wyszukiwania, co zwiększa
                  widoczność Twojej witryny.
                </p>
              </div>
            </div>
          )}
          {wordpress && (
            <div
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
              className={`${styles.card} ${styles.up}`}
            >
              <StaticImage
                src="../../images/wordpress.webp"
                alt="wordpress - strony internetowe oparte na wordpress"
                width={330}
                height={440}
              />
              <div className={styles.card_text}>
                <h3>CMS – Łatwe Zarządzanie Treścią</h3>
                <p>
                  Oferuję <em>tworzenie stron internetowych</em> opartych na systemach zarządzania treścią (CMS), takich
                  jak
                  <em>WordPress</em>. Dzięki temu zyskujesz pełną kontrolę nad swoją stroną, co pozwala na samodzielne
                  dodawanie treści i aktualizowanie zawartości bez potrzeby znajomości programowania.
                </p>
              </div>
            </div>
          )}
          <div
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={`${styles.card} ${styles.down}`}
          >
            <StaticImage
              src="../../images/web_design.webp"
              alt="web design - projektowanie stron internetowych"
              width={330}
              height={440}
            />
            <div className={styles.card_text}>
              <h3>Nowoczesny Design</h3>
              <p>
                Każda strona internetowa jest projektowana z myślą o indywidualnych potrzebach Twojej marki. Tworzę
                nowoczesne, estetyczne i funkcjonalne witryny, które idealnie oddają charakter Twojego biznesu i
                przyciągają uwagę klientów.
              </p>
            </div>
          </div>
          <div
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={`${styles.card} ${styles.up}`}
          >
            <StaticImage
              src="../../images/wspolpraca.webp"
              alt="współpraca - wsparcie i współpraca przy tworzeniu strony internetowej"
              width={330}
              height={440}
            />
            <div className={styles.card_text}>
              <h3>Wsparcie i Współpraca</h3>
              <p>
                Podczas całego procesu <em>tworzenia strony internetowej</em>, będziesz na bieżąco informowany o
                postępach. Współpracujemy nad projektem, aby strona w pełni spełniała Twoje oczekiwania i była gotowa na
                czas.
              </p>
            </div>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={`${styles.card} ${styles.down}`}
          >
            <StaticImage
              src="../../images/galeria.webp"
              alt="grafiki i zdjęcia - profesjonalne zdjęcia i grafiki na stronę internetową"
              width={330}
              height={440}
            />
            <div className={styles.card_text}>
              <h3>Grafiki i Zdjęcia</h3>
              <p>
                Posiadam dostęp do profesjonalnej bazy grafik i zdjęć, które mogą zostać wykorzystane na Twojej stronie.
                Dzięki temu Twoja strona internetowa będzie nie tylko funkcjonalna, ale także wizualnie atrakcyjna i
                estetyczna.
              </p>
            </div>
          </div>
          <div
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={`${styles.card} ${styles.up}`}
          >
            <StaticImage
              src="../../images/rwd.webp"
              alt="responsywność - responsywne strony internetowe"
              width={330}
              height={440}
            />
            <div className={styles.card_text}>
              <h3>Responsywność (RWD)</h3>
              <p>
                <em>Każda tworzona przeze mnie strona internetowa</em> jest w pełni responsywna. To oznacza, że będzie
                doskonale wyglądać i działać na wszystkich urządzeniach, od smartfonów po laptopy, zapewniając idealne
                doświadczenie użytkownikom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesInfo;
