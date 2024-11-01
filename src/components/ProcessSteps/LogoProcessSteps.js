import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import * as styles from './LogoProcessSteps.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { Container } from 'react-bootstrap';

const LogoProcessSteps = () => {
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = document.querySelectorAll(`.${styles.step}`);
      const windowHeight = window.innerHeight;

      stepElements.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;

        if (elementMiddle < windowHeight * 0.75 && elementMiddle > windowHeight * 0.25) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.process_steps_container}>
      <Container>
        <SectionTitle title="Mój proces projektowania" coloredText=" Logo" />
        <div className={styles.process_steps}>
          <div className={`${styles.step} ${styles.left} ${activeStep === 0 ? styles.active : ''}`}>
            <div className={styles.step_empty}></div>
            <div className={`${styles.step_content} ${styles.step_1} ${styles.step_brief}`}>
              <h3>Brief i Konsultacja</h3>
              <p>
                Zaczynamy od rozmowy na temat Twojej wizji. Zbieram informacje o Twojej firmie, jej celach, grupie
                docelowej i preferencjach estetycznych. Ten etap pomaga mi zrozumieć, jakie logo najlepiej odzwierciedli
                charakter Twojej marki.
              </p>
            </div>
            <div className={styles.step_number}>
              <StaticImage
                src="../../images/brief.png"
                alt="ikona przedstawiająca pierwszy kontakt z klientem w celu zebrania informacji o potrzenym logo"
                width={150}
              />
            </div>
          </div>
          <div className={`${styles.step} ${styles.right} ${activeStep === 1 ? styles.active : ''}`}>
            <div className={styles.step_empty}></div>
            <div className={`${styles.step_content} ${styles.step_2} ${styles.step_info}`}>
              <h3>Tworzenie koncepcji</h3>
              <p>
                Na podstawie briefu tworzę 3-5 unikalnych koncepcji logo, które są zgodne z Twoimi wymaganiami i wizją.
                Każdy projekt jest starannie zaprojektowany, aby pasował do branży, w której działa Twoja firma.
              </p>
            </div>
            <div className={styles.step_number_left}>
              <StaticImage
                src="../../images/kontent.png"
                alt="ikona przedstawiająca pierwsze prace stworzenia logo"
                width={150}
              />
            </div>
          </div>
          <div className={`${styles.step} ${styles.left} ${activeStep === 2 ? styles.active : ''}`}>
            <div className={styles.step_empty}></div>
            <div className={`${styles.step_content} ${styles.step_3} ${styles.step_projektowanie}`}>
              <h3>Wybór projektu i poprawki</h3>
              <p>
                Wybierasz najbardziej odpowiadającą Ci koncepcję. Następnie wprowadzam ewentualne poprawki, zgodnie z
                Twoimi uwagami, aż logo będzie w pełni spełniało Twoje oczekiwania.
              </p>
            </div>
            <div className={styles.step_number}>
              <StaticImage
                src="../../images/projektowanie.png"
                alt="ikona przedstawiająca projektowanie właściwego logo"
                width={150}
              />
            </div>
          </div>
          <div className={`${styles.step} ${styles.right} ${activeStep === 3 ? styles.active : ''}`}>
            <div className={styles.step_empty}></div>
            <div className={`${styles.step_content} ${styles.step_4} ${styles.step_kodowanie}`}>
              <h3>Finalizacja i dostarczenie plików</h3>
              <p>
                Po akceptacji dostarczam finalne logo w różnych formatach, gotowych do użycia na stronie internetowej,
                materiałach drukowanych i innych nośnikach (PNG, SVG, PDF). Logo otrzymasz w wersji kolorowej oraz
                monochromatycznej.
              </p>
            </div>
            <div className={styles.step_number_left}>
              <StaticImage
                src="../../images/tworzenie-strony.png"
                alt="ikona przedstawiająca finalną wersję logo "
                width={150}
              />
            </div>
          </div>
          <div className={`${styles.step} ${styles.left} ${activeStep === 4 ? styles.active : ''}`}>
            <div className={styles.step_empty}></div>
            <div className={`${styles.step_content} ${styles.step_5} ${styles.step_wdrozenie}`}>
              <h3>Wsparcie</h3>
              <p>
                Po zakończeniu projektu oferuję dodatkowe wsparcie, jeśli będziesz potrzebować pomocy przy implementacji
                logo na stronie internetowej, mediach społecznościowych lub materiałach drukowanych.
              </p>
            </div>
            <div className={styles.step_number_last}>
              <StaticImage
                src="../../images/koniec.png"
                alt="ikona przedstawiająca wsparcie po zakończeniu projektu"
                width={150}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LogoProcessSteps;
