import React from 'react';
import * as styles from './AboutMe.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';

const AboutMe = () => {
  return (
    <div className={styles.AboutMe}>
      <Container>
        <SectionTitle title="Kilka słów" coloredText=" o mnie" />

        <div className={styles.wrapper}>
          <div className={styles.firstColumn}>
            <StaticImage
              src="../../images/aboutMe.webp"
              alt="Dariusz Wasilewski"
              placeholder="blurred"
              width={400}
              className={styles.image}
            />
          </div>
          <div className={styles.secondColumn}>
            <h3>Cześć</h3>
            <p>
              Witaj na mojej stronie! Nazywam się Dariusz Wasilewski i jestem pasjonatem web developmentu z
              Jastrzębia-Zdroju. Od zawsze interesowały mnie technologie internetowe i możliwości, jakie dają. Moja
              przygoda z kodowaniem rozpoczęła się od fascynacji HTML i CSS, a potem poszła w górę. Dzięki temu,
              nauczyłem się tworzyć responsywne i interaktywne strony internetowe, które spełniają najwyższe standardy.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
