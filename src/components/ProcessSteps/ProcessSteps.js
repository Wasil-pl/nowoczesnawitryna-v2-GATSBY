import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import * as styles from './ProcessSteps.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const ProcessSteps = () => {
  return (
    <section className={styles.process_steps_container}>
      <SectionTitle title="Mój proces projektowania" coloredText=" stron internetowych" />
      <div className={styles.process_steps}>
        <div className={`${styles.step} ${styles.left}`}>
          <div className={styles.step_empty}></div>
          <div className={styles.step_content}>
            <h3 className={styles.step_brief}>Brief i Konsultacja</h3>
            <p>
              Na początek ustalamy Twoje oczekiwania, wizję i preferencje dotyczące strony. Zbieram informacje o Twojej
              firmie, aby stworzyć stronę, która najlepiej ją reprezentuje.
            </p>
          </div>
          <div className={styles.step_number}>
            <StaticImage src="../../images/brief.png" alt="brief" width={150} />
          </div>
        </div>
        <div className={`${styles.step} ${styles.right}`}>
          <div className={styles.step_empty}></div>
          <div className={styles.step_content}>
            <h3 className={styles.step_info}>Zbieranie i Przygotowywanie kontentu</h3>
            <p>
              W tym kroku zbieram wszelkie materiały potrzebne do stworzenia strony, takie jak teksty, grafiki, zdjęcia
              oraz inne elementy wizualne. Jeśli nie masz gotowego kontentu, mogę pomóc w jego przygotowaniu, aby strona
              była spójna i atrakcyjna wizualnie.
            </p>
          </div>
          <div className={styles.step_number_left}>
            <StaticImage src="../../images/kontent.png" alt="kontent" width={150} />
          </div>
        </div>
        <div className={`${styles.step} ${styles.left}`}>
          <div className={styles.step_empty}></div>
          <div className={styles.step_content}>
            <h3 className={styles.step_projektowanie}>Projektowanie</h3>
            <p>
              Na podstawie Twoich wymagań tworzę wstępny projekt graficzny strony, który będzie odzwierciedlać Twój
              unikalny styl i potrzeby.
            </p>
          </div>
          <div className={styles.step_number}>
            <StaticImage src="../../images/projektowanie.png" alt="projektowanie" width={150} />
          </div>
        </div>
        <div className={`${styles.step} ${styles.right}`}>
          <div className={styles.step_empty}></div>
          <div className={styles.step_content}>
            <h3 className={styles.step_kodowanie}>Tworzenie Strony Internetowej</h3>
            <p>
              Po akceptacji projektu przechodzę do kodowania i tworzenia funkcjonalnej strony. Strona jest responsywna,
              zoptymalizowana pod kątem SEO i łatwa w zarządzaniu.
            </p>
          </div>
          <div className={styles.step_number_left}>
            <StaticImage src="../../images/tworzenie-strony.png" alt="wdrożenie" width={150} />
          </div>
        </div>
        <div className={`${styles.step} ${styles.left}`}>
          <div className={styles.step_empty}></div>
          <div className={styles.step_content}>
            <h3 className={styles.step_testowanie}>Testowanie i Optymalizacja</h3>
            <p>
              Przed wdrożeniem testuję stronę na różnych urządzeniach i przeglądarkach, aby upewnić się, że działa bez
              zarzutu.
            </p>
          </div>
          <div className={styles.step_number}>
            <StaticImage src="../../images/testowanie.png" alt="testowanie" width={150} />
          </div>
        </div>
        <div className={`${styles.step} ${styles.right}`}>
          <div className={styles.step_empty}></div>
          <div className={styles.step_content}>
            <h3 className={styles.step_wdrozenie}>Wdrożenie i Wsparcie</h3>
            <p>
              Po finalnej akceptacji strona jest publikowana. Oferuję wsparcie techniczne po wdrożeniu, aby upewnić się,
              że strona działa bez zarzutu, a także pomagam w jej aktualizacjach.
            </p>
          </div>
          <div className={styles.step_number_last}>
            <StaticImage src="../../images/koniec.png" alt="testowanie" width={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
