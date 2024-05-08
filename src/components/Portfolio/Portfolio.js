import React from 'react';
import * as styles from './Portfolio.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';

const Portfolio = () => {
  return (
    <div className={styles.Portfolio}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.portfolioItem}>
            <SectionTitle title="Moje ostatnie" coloredText=" projekty" />
          </div>
          <div className={`${styles.portfolioItem} ${styles.imageBox}`}>
            <StaticImage src="../../images/strona-z-grami.jpeg" alt="Strona z grami" width={300} height={600} />
          </div>
          <div className={`${styles.portfolioItem} ${styles.imageBox}`}>
            <StaticImage src="../../images/fotografia1.webp" alt="Fotografia 1" width={300} height={600} />
          </div>
          <div className={`${styles.portfolioItem} ${styles.imageBox}`}>
            <StaticImage
              src="../../images/wrozkasorayasotrona-scaled.jpg"
              alt="Wróżka Soraya"
              width={300}
              height={600}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
