import React from 'react';
import * as styles from './ServicesInfo.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';
import Action from '../Action/Action';

const ServicesInfo = ({ html, wordpress }) => {
  return (
    <section className={styles.services_info}>
      <Container>
        <div className={styles.wrapper}>
          <div className={`${styles.card} ${styles.down}`}>
            <SectionTitle title="Mój serwis" subtitle="Jak to wygląda?" />
          </div>
          {html && (
            <div className={`${styles.card} ${styles.up}`}>
              <StaticImage src="../../images/kod.webp" alt="kod" width={330} height={440} />
              <div className={styles.card_text}>
                <h3>Czysty i Estetyczny kod</h3>
                <p>
                  Moje strony charakteryzują się czystym i czytelnym kodem, co nie tylko ułatwia późniejsze modyfikacje,
                  ale także pozytywnie wpływa na pozycjonowanie w wynikach wyszukiwania.
                </p>
              </div>
            </div>
          )}
          {wordpress && (
            <div className={`${styles.card} ${styles.up}`}>
              <StaticImage src="../../images/wordpress.webp" alt="wordpress" width={330} height={440} />
              <div className={styles.card_text}>
                <h3>CMS</h3>
                <p>
                  Oferuję tworzenie stron internetowych opartych na systemach zarządzania treścią (CMS), takich jak
                  WordPress. Dzięki temu będziesz mógł samodzielnie zarządzać swoją stroną, dodawać treści i
                  aktualizować jej zawartość.
                </p>
              </div>
            </div>
          )}
          <div className={`${styles.card} ${styles.down}`}>
            <StaticImage src="../../images/web_design.webp" alt="web_design" width={330} height={440} />
            <div className={styles.card_text}>
              <h3>Nowoczesny Design</h3>
              <p>
                Projektowanie stron internetowych realizuję z uwzględnieniem indywidualnych potrzeb, co gwarantuje
                otrzymanie witryny perfekcyjnie dopasowanej do profilu Twojej marki.
              </p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.up}`}>
            <StaticImage src="../../images/wspolpraca.webp" alt="wspolpraca" width={330} height={440} />
            <div className={styles.card_text}>
              <h3>Wsparcie i Współpraca</h3>
              <p>
                Podczas tworzenia strony będziesz na bieżąco informowany o postępach w projekcie. Wspólnie będziemy
                pracować nad tym, aby Twoja strona była zgodna z Twoimi oczekiwaniami.
              </p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.down}`}>
            <StaticImage src="../../images/galeria.webp" alt="galeria" width={330} height={440} />
            <div className={styles.card_text}>
              <h3>Grafiki i Zdjęcia</h3>
              <p>
                Posiadam dostęp do szerokiej bazy grafik i zdjęć, które mogą zostać wykorzystane na Twojej stronie.
                Dzięki temu Twoja witryna będzie wyglądać profesjonalnie i atrakcyjnie.
              </p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.up}`}>
            <StaticImage src="../../images/rwd.webp" alt="rwd" width={330} height={440} />
            <div className={styles.card_text}>
              <h3>Responsywność (RWD)</h3>
              <p>
                Każda strona, którą tworzę, zawiera responsywny design. Dzięki temu Twoja witryna będzie doskonale
                wyglądać i działać na różnych urządzeniach, od smartfonów po komputery.
              </p>
            </div>
          </div>
        </div>

        <Action />
      </Container>
    </section>
  );
};

export default ServicesInfo;
