import React from 'react';
import * as styles from './AboutMe.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';

const AboutMe = () => {
  return (
    <section className={styles.about_me}>
      <Container>
        <SectionTitle title="Kilka słów" coloredText=" o mnie" />

        <div className={styles.wrapper}>
          <div data-sal="slide-right" data-sal-delay="100" data-sal-duration="1000" className={styles.first_column}>
            <StaticImage
              src="../../images/aboutMe.webp"
              alt="Dariusz Wasilewski"
              placeholder="blurred"
              width={400}
              className={styles.image}
            />
          </div>
          <div data-sal="slide-left" data-sal-delay="100" data-sal-duration="1000" className={styles.second_column}>
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
    </section>
  );
};

export default AboutMe;
