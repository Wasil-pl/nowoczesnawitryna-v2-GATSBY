import React from 'react';
import * as styles from './Testiniomals.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import { StarFill } from 'react-bootstrap-icons';

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
              <StarFill />
            </div>
            <div className={styles.testimonial_text}>
              <p>
                "Jestem zachwycona współpracą! Sklep internetowy został wykonany w błyskawicznym tempie, zgodnie z moimi
                prośbami. Wizualnie - nie mogłam sobie tego lepiej wyobrazić! Kontakt i współpraca na najlepszym
                poziomie! Polecam!"
              </p>
              <p>- Katarzyna Mokrzycka</p>
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
                "Usługa wykonania strony internetowej wykonana szybko i profesjonalnie. Współpraca z p. Dariuszem to
                sama przyjemność. Wszystkie uwagi wdrażane na bieżąco. Strona bardzo ładna, intuicyjna. POLECAM!!!!"
              </p>
              <p>- Artur Przybyla</p>
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
                "Serdecznie dziękuję za współpracę i polecam tym, którzy mają przed sobą przebrnięcie przez stworzenie
                własnej strony internetowej. Ważne punkty, które wpłynęły na moją opinię to bardzo uczciwa cena i łatwo
                dostępny kontakt z Panem Dariuszem. Jego zaangażowanie i wiedza widoczne były już w pierwszych mailach,
                w trakcie procesu tylko się to potwierdzało."
              </p>
              <p>- Weronika Elveren</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testiniomals;
