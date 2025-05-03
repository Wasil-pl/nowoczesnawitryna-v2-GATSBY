import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import * as styles from './WebSiteProcessSteps.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const WebSiteProcessSteps = () => {
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = document.querySelectorAll(`.${styles.step}`);
      const windowHeight = window.innerHeight;

      stepElements.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;

        if (elementMiddle < windowHeight * 0.6 && elementMiddle > windowHeight * 0.25) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.process_steps_container}>
      <div className="container mx-auto px-4">
        <SectionTitle title="Mój proces projektowania" coloredText=" stron internetowych" backgroundText="Proces" />
        <div className={styles.process_steps}>
          <div className={`${styles.step} ${styles.left} ${activeStep === 0 ? styles.active : ''}`}>
            <div className={styles.step_empty}></div>
            <div className={`${styles.step_content} ${styles.step_1} ${styles.step_brief}`}>
              <h3>Brief i Konsultacja</h3>
              <p>
                Na początek ustalamy Twoje oczekiwania, wizję i preferencje dotyczące Twojej strony internetowej.
                Zbieram informacje o Twojej firmie, aby stworzyć taką stronę, która najlepiej ją reprezentuje.
              </p>
            </div>
            <div className={styles.step_number}>
              <StaticImage
                src="../../../../images/brief.png"
                alt="ikona przedstawiająca pierwszy kontakt z klientem w celu zebrania informacji o potrzebnej stronie internetowej"
                width={150}
              />
            </div>
          </div>
          <div className={`${styles.step} ${styles.right} ${activeStep === 1 ? styles.active : ''}`}>
            <div className={styles.step_empty}></div>
            <div className={`${styles.step_content} ${styles.step_2} ${styles.step_info}`}>
              <h3>Zbieranie i Przygotowywanie kontentu</h3>
              <p>
                W tym kroku zbieram wszelkie materiały potrzebne do stworzenia strony internetowej, takie jak teksty,
                grafiki, zdjęcia oraz inne elementy wizualne. Jeśli nie masz gotowego kontentu, mogę pomóc w jego
                przygotowaniu, aby strona była spójna i atrakcyjna wizualnie.
              </p>
            </div>
            <div className={styles.step_number_left}>
              <StaticImage
                src="../../../../images/kontent.png"
                alt="ikona przedstawiająca zbieranie i przygotowywanie kontentu do strony internetowej"
                width={150}
              />
            </div>
          </div>
          <div className={`${styles.step} ${styles.left} ${activeStep === 2 ? styles.active : ''}`}>
            <div className={styles.step_empty}></div>
            <div className={`${styles.step_content} ${styles.step_3} ${styles.step_projektowanie}`}>
              <h3>Projektowanie</h3>
              <p>
                Na podstawie Twoich wymagań tworzę wstępny projekt graficzny strony, który będzie odzwierciedlać Twój
                unikalny styl i potrzeby.
              </p>
            </div>
            <div className={styles.step_number}>
              <StaticImage
                src="../../../../images/projektowanie.png"
                alt="ikona przedstawiająca projektowanie strony internetowej"
                width={150}
              />
            </div>
          </div>
          <div className={`${styles.step} ${styles.right} ${activeStep === 3 ? styles.active : ''}`}>
            <div className={styles.step_empty}></div>
            <div className={`${styles.step_content} ${styles.step_4} ${styles.step_kodowanie}`}>
              <h3>Tworzenie Strony Internetowej</h3>
              <p>
                Po akceptacji projektu przechodzę do kodowania i tworzenia funkcjonalnej strony internetowej. Strona
                jest responsywna, zoptymalizowana pod kątem SEO i łatwa w zarządzaniu.
              </p>
            </div>
            <div className={styles.step_number_left}>
              <StaticImage
                src="../../../../images/tworzenie-strony.png"
                alt="ikona przedstawiająca tworzenie strony internetowej"
                width={150}
              />
            </div>
          </div>
          <div className={`${styles.step} ${styles.left} ${activeStep === 4 ? styles.active : ''}`}>
            <div className={styles.step_empty}></div>
            <div className={`${styles.step_content} ${styles.step_5} ${styles.step_testowanie}`}>
              <h3>Testowanie i Optymalizacja</h3>
              <p>
                Przed wdrożeniem, testuję stronę internetową na różnych urządzeniach i przeglądarkach, aby upewnić się,
                że działa bez zarzutu.
              </p>
            </div>
            <div className={styles.step_number}>
              <StaticImage
                src="../../../../images/testowanie.png"
                alt="ikona przedstawiająca testowanie strony internetowej"
                width={150}
              />
            </div>
          </div>
          <div className={`${styles.step} ${styles.right} ${activeStep === 5 ? styles.active : ''}`}>
            <div className={styles.step_empty}></div>
            <div className={`${styles.step_content} ${styles.step_6} ${styles.step_wdrozenie}`}>
              <h3>Wdrożenie i Wsparcie</h3>
              <p>
                Po finalnej akceptacji, Twoja strona internetowa jest publikowana. Oferuję wsparcie techniczne po
                wdrożeniu, aby upewnić się, że strona działa bez zarzutu, a także pomagam w jej aktualizacjach.
              </p>
            </div>
            <div className={styles.step_number_last}>
              <StaticImage
                src="../../../../images/koniec.png"
                alt="ikona przedstawiająca wdrożenie strony internetowej"
                width={150}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebSiteProcessSteps;
