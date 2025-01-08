import React, { useEffect, useState } from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import * as styles from './WhyMe.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { Container } from 'react-bootstrap';

const WhyMe = ({
  title_first_row,
  description_first_row,
  title_second_row,
  description_second_row,
  title_third_row,
  description_third_row,
  title_fourth_row,
  description_fourth_row,
  title_fifth_row,
  description_fifth_row,
  title_sixth_row,
  description_sixth_row,
  title_seventh_row,
  description_seventh_row,
  title_eighth_row,
  description_eighth_row,
  title_ninth_row,
  description_ninth_row,
  title_tenth_row,
  description_tenth_row,
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
      <Container>
        <SectionTitle title="Dlaczego warto ze mną" coloredText=" współpracować" />
        <div className={styles.process_steps}>
          <div className={`${styles.step} ${styles.left} ${activeStep === 0 ? styles.active : ''}`}>
            <div className={`${styles.step_content} ${styles.step_1} ${styles.step_1}`}>
              <h3>{title_first_row}</h3>
              <p>{description_first_row}</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.right} ${activeStep === 1 ? styles.active : ''}`}>
            <div className={`${styles.step_content} ${styles.step_2} ${styles.step_2}`}>
              <h3>{title_second_row}</h3>
              <p>{description_second_row}</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.left} ${activeStep === 2 ? styles.active : ''}`}>
            <div className={`${styles.step_content} ${styles.step_3} ${styles.step_3}`}>
              <h3>{title_third_row}</h3>
              <p>{description_third_row}</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.right} ${activeStep === 3 ? styles.active : ''}`}>
            <div className={`${styles.step_content} ${styles.step_4} ${styles.step_4}`}>
              <h3>{title_fourth_row}</h3>
              <p>{description_fourth_row}</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.left} ${activeStep === 4 ? styles.active : ''}`}>
            <div className={`${styles.step_content} ${styles.step_5} ${styles.step_5}`}>
              <h3>{title_fifth_row}</h3>
              <p>{description_fifth_row}</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.right} ${activeStep === 5 ? styles.active : ''}`}>
            <div className={`${styles.step_content} ${styles.step_6} ${styles.step_6}`}>
              <h3>{title_sixth_row}</h3>
              <p>{description_sixth_row}</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.left} ${activeStep === 6 ? styles.active : ''}`}>
            <div className={`${styles.step_content} ${styles.step_7} ${styles.step_7}`}>
              <h3>{title_seventh_row}</h3>
              <p>{description_seventh_row}</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.right} ${activeStep === 7 ? styles.active : ''}`}>
            <div className={`${styles.step_content} ${styles.step_8} ${styles.step_8}`}>
              <h3>{title_eighth_row}</h3>
              <p>{description_eighth_row}</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.left} ${activeStep === 8 ? styles.active : ''}`}>
            <div className={`${styles.step_content} ${styles.step_9} ${styles.step_9}`}>
              <h3>{title_ninth_row}</h3>
              <p>{description_ninth_row}</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.right} ${activeStep === 9 ? styles.active : ''}`}>
            <div className={`${styles.step_content} ${styles.step_10} ${styles.step_10}`}>
              <h3>{title_tenth_row}</h3>
              <p>{description_tenth_row}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyMe;
