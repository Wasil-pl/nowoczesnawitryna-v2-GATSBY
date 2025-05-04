import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import * as styles from './LPProcessSteps.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const LPProcessSteps = ({
  sectionTitle,
  sectionTitleColored,
  step1Title,
  step1Description,
  step2Title,
  step2Description,
  step3Title,
  step3Description,
  step4Title,
  step4Description,
  step5Title,
  step5Description,
  step6Title,
  step6Description,
}) => {
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
        <SectionTitle
          ariaLabel={sectionTitle + sectionTitleColored}
          title={sectionTitle}
          coloredText={sectionTitleColored}
          backgroundText="Proces"
        />
        <div className={styles.process_steps}>
          <div className={`${styles.step} ${styles.left} ${activeStep === 0 ? styles.active : ''}`}>
            <div className={styles.step_empty}></div>
            <div className={`${styles.step_content} ${styles.step_1} ${styles.step_brief}`}>
              <h3>{step1Title}</h3>
              <p>{step1Description}</p>
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
              <h3>{step2Title}</h3>
              <p>{step2Description}</p>
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
              <h3>{step3Title}</h3>
              <p>{step3Description}</p>
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
              <h3>{step4Title}</h3>
              <p>{step4Description}</p>
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
              <h3>{step5Title}</h3>
              <p>{step5Description}</p>
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
              <h3>{step6Title}</h3>
              <p>{step6Description}</p>
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

export default LPProcessSteps;
