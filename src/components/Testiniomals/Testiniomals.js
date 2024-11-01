import React from 'react';
import * as styles from './Testiniomals.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import { StarFill } from 'react-bootstrap-icons';
import Action from '../Action/Action';

const Testiniomals = () => {
  return (
    <section className={styles.testiniomals}>
      <Container>
        <div className={styles.title}>
          <SectionTitle coloredText="Niezdecydowany?" subtitle="Zobacz co sądzą o mnie moi klienci" variant="white" />
        </div>

        <div className={styles.wrapper}>
          <div className={styles.testimonial} itemscope itemtype="https://schema.org/Review">
            <div
              className={styles.testimonial_stars}
              itemprop="reviewRating"
              itemscope
              itemtype="https://schema.org/Rating"
            >
              <meta itemprop="ratingValue" content="5" />
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
            </div>
            <div className={styles.testimonial_text}>
              <p itemprop="reviewBody">
                "Jestem zachwycona współpracą! Sklep internetowy został wykonany w błyskawicznym tempie, zgodnie z moimi
                prośbami. Wizualnie - nie mogłam sobie tego lepiej wyobrazić! Kontakt i współpraca na najlepszym
                poziomie! Polecam!"
              </p>
              <p itemprop="author">- Katarzyna Mokrzycka</p>
            </div>
          </div>
          <div className={styles.testimonial} itemscope itemtype="https://schema.org/Review">
            <div
              className={styles.testimonial_stars}
              itemprop="reviewRating"
              itemscope
              itemtype="https://schema.org/Rating"
            >
              <meta itemprop="ratingValue" content="5" />
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
            </div>
            <div className={styles.testimonial_text}>
              <p itemprop="reviewBody">
                "Usługa wykonania strony internetowej wykonana szybko i profesjonalnie. Współpraca z p. Dariuszem to
                sama przyjemność. Wszystkie uwagi wdrażane na bieżąco. Strona bardzo ładna, intuicyjna. POLECAM!!!!"
              </p>
              <p itemprop="author">- Artur Przybyla</p>
            </div>
          </div>
          <div className={styles.testimonial} itemscope itemtype="https://schema.org/Review">
            <div
              className={styles.testimonial_stars}
              itemprop="reviewRating"
              itemscope
              itemtype="https://schema.org/Rating"
            >
              <meta itemprop="ratingValue" content="5" />
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
            </div>
            <div className={styles.testimonial_text}>
              <p itemprop="reviewBody">
                "Serdecznie dziękuję za współpracę i polecam tym, którzy mają przed sobą przebrnięcie przez stworzenie
                własnej strony internetowej. Ważne punkty, które wpłynęły na moją opinię to bardzo uczciwa cena i łatwo
                dostępny kontakt z Panem Dariuszem. Jego zaangażowanie i wiedza widoczne były już w pierwszych mailach,
                w trakcie procesu tylko się to potwierdzało."
              </p>
              <p itemprop="author">- Weronika Elveren</p>
            </div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.testimonial_text}>
              <p className={styles.google_link}>
                <a href="https://maps.app.goo.gl/2UKkcFvoNswxPgof9" target="_blank" rel="noopener noreferrer">
                  Zobacz wszystkie opinie na Google
                </a>
              </p>
            </div>
          </div>
        </div>
        <Action kontakt_2 variant={'bottom'} />
      </Container>
    </section>
  );
};

export default Testiniomals;
