import React from 'react';
import * as styles from './Portfolio.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <Container>
        <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" className={styles.wrapper}>
          <div className={styles.portfolio_item}>
            <SectionTitle title="Moje ostatnie" coloredText=" projekty" />
          </div>
          <div className={`${styles.portfolio_item} ${styles.image_box}`}>
            <StaticImage src="../../images/strona-z-grami.jpeg" alt="Strona z grami" width={300} height={600} />
          </div>
          <div className={`${styles.portfolio_item} ${styles.image_box}`}>
            <StaticImage src="../../images/fotografia1.webp" alt="Fotografia 1" width={300} height={600} />
          </div>
          <div className={`${styles.portfolio_item} ${styles.image_box}`}>
            <StaticImage
              src="../../images/wrozkasorayasotrona-scaled.jpg"
              alt="Wróżka Soraya"
              width={300}
              height={600}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
