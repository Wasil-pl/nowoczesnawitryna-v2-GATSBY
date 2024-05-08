import React from 'react';
import * as styles from './Testiniomals.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import { StarFill, Star } from 'react-bootstrap-icons';

const Testiniomals = () => {
  return (
    <div className={styles.Testiniomals}>
      <Container>
        <div className={styles.title}>
          <SectionTitle coloredText="Niezdecydowany?" subtitle={`Zobacz co sądzą o mnie moi klienci`} variant="white" />
        </div>

        <div className={styles.wrapper}>
          <div className={styles.testimonial}>
            <div className={styles.testimonialStars}>
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
              <Star />
            </div>
            <div className={styles.testimonialText}>
              <p>"Dobra firma, zna się na swojej robocie, strona www zrobiona idealnie, polecam.</p>
              <p>- Patryk Danielak</p>
            </div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.testimonialStars}>
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
            </div>
            <div className={styles.testimonialText}>
              <p>
                "Pełen profesjonalizm, doradztwo dla laików. A wykonanie zadania zgodne z oczekiwaniami, sprawny i
                szybki projekt z korekta wedle uznania klienta. Polecam."
              </p>
              <p>- Amelia Zawadzka</p>
            </div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.testimonialStars}>
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
              <Star />
            </div>
            <div className={styles.testimonialText}>
              <p>"Profesjonalne podejście do klienta, szybka realizacja usługi, bardzo dobra współpraca. Polecam!"</p>
              <p>- Rafal Przybyla</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testiniomals;
