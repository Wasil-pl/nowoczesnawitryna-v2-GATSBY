import React from 'react';
import * as styles from './AboutMe.module.scss';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';

const AboutMe = () => {
  return (
    <section id="omnie" className={styles.about_me}>
      <div className="container mx-auto px-4">
        <SectionTitle title="Kilka słów" coloredText=" o mnie" backgroundText="O mnie" ariaLabel="Kilka słów o mnie" />
        <div className={styles.wrapper}>
          <div data-sal="slide-right" data-sal-delay="100" data-sal-duration="1000" className={styles.first_column}>
            <StaticImage
              src="../../../../images/aboutMe.png"
              alt="Dariusz Wasilewski full-stack web developer"
              placeholder="blurred"
              width={700}
            />
          </div>
          <div data-sal="slide-left" data-sal-delay="100" data-sal-duration="1000" className={styles.second_column}>
            <h3 aria-label="Cześć!">Cześć</h3>
            <p>
              Cześć! Nazywam się Dariusz Wasilewski i jestem pasjonatem{' '}
              <em>tworzenia stron internetowych z Jastrzębia-Zdroju.</em> Moja fascynacja technologiami internetowymi
              zaczęła się już dawno temu i szybko przekształciła się w pełnowymiarową karierę jako{' '}
              <em>web developer</em>. Od pierwszych kroków w HTML i CSS, przez zaawansowane technologie, nauczyłem się
              tworzyć nowoczesne, responsywne i interaktywne strony internetowe. Strony te spełniają najwyższe standardy
              zarówno pod względem designu, jak i funkcjonalności. Moim celem jest tworzenie stron, które nie tylko
              dobrze wyglądają, ale również są intuicyjne w obsłudze, szybkie i zoptymalizowane pod kątem SEO. Każdy
              projekt traktuję indywidualnie, dostosowując rozwiązania do potrzeb i oczekiwań moich klientów.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
