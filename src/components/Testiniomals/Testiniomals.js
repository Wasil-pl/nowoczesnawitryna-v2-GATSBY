import React from 'react';
import * as styles from './Testiniomals.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import { StarFill, Star } from 'react-bootstrap-icons';

const Testiniomals = () => {
  return (
    <section className={styles.testiniomals}>
      <Container>
        <div className={styles.title}>
          <SectionTitle coloredText="Niezdecydowany?" subtitle="Zobacz co sądzą o mnie moi klienci" variant="white" />
        </div>

        <div className={styles.wrapper}>
          <div className={styles.testimonial}>
            <div className={styles.testimonial_stars}>
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
              <Star />
            </div>
            <div className={styles.testimonial_text}>
              <p>"Dobra firma, zna się na swojej robocie, strona www zrobiona idealnie, polecam.</p>
              <p>- Patryk Danielak</p>
            </div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.testimonial_stars}>
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
            </div>
            <div className={styles.testimonial_text}>
              <p>
                "Pełen profesjonalizm, doradztwo dla laików. A wykonanie zadania zgodne z oczekiwaniami, sprawny i
                szybki projekt z korekta wedle uznania klienta. Polecam."
              </p>
              <p>- Amelia Zawadzka</p>
            </div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.testimonial_stars}>
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
              <Star />
            </div>
            <div className={styles.testimonial_text}>
              <p>"Profesjonalne podejście do klienta, szybka realizacja usługi, bardzo dobra współpraca. Polecam!"</p>
              <p>- Rafal Przybyla</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testiniomals;
