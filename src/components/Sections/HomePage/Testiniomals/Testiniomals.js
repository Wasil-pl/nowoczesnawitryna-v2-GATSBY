import React from 'react';
import * as styles from './Testiniomals.module.scss';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import CallToAction from '../../Shared/CallToAction/CallToAction';
import { StarIcon } from '@heroicons/react/24/solid';

const Testiniomals = () => {
  return (
    <section className={styles.testiniomals}>
      <div className="container mx-auto px-4">
        <div className={styles.title}>
          <SectionTitle coloredText="Niezdecydowany?" subtitle="Zobacz co sądzą o mnie moi klienci" variant="white" />
        </div>

        <div className={styles.wrapper}>
          <div className={styles.testimonial} itemScope itemType="https://schema.org/Review">
            <div
              className={styles.testimonial_stars}
              itemProp="reviewRating"
              itemScope
              itemType="https://schema.org/Rating"
            >
              <meta itemProp="ratingValue" content="5" />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className={styles.testimonial_text}>
              <p itemProp="reviewBody">
                "Jestem zachwycona współpracą! Sklep internetowy został wykonany w błyskawicznym tempie, zgodnie z moimi
                prośbami. Wizualnie - nie mogłam sobie tego lepiej wyobrazić! Kontakt i współpraca na najlepszym
                poziomie! Polecam!"
              </p>
              <p itemProp="author">- Katarzyna Mokrzycka</p>
            </div>
          </div>
          <div className={styles.testimonial} itemScope itemType="https://schema.org/Review">
            <div
              className={styles.testimonial_stars}
              itemProp="reviewRating"
              itemScope
              itemType="https://schema.org/Rating"
            >
              <meta itemProp="ratingValue" content="5" />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className={styles.testimonial_text}>
              <p itemProp="reviewBody">
                "Usługa wykonania strony internetowej wykonana szybko i profesjonalnie. Współpraca z p. Dariuszem to
                sama przyjemność. Wszystkie uwagi wdrażane na bieżąco. Strona bardzo ładna, intuicyjna. POLECAM!!!!"
              </p>
              <p itemProp="author">- Artur Przybyla</p>
            </div>
          </div>
          <div className={styles.testimonial} itemScope itemType="https://schema.org/Review">
            <div
              className={styles.testimonial_stars}
              itemProp="reviewRating"
              itemScope
              itemType="https://schema.org/Rating"
            >
              <meta itemProp="ratingValue" content="5" />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className={styles.testimonial_text}>
              <p itemProp="reviewBody">
                "Serdecznie dziękuję za współpracę i polecam tym, którzy mają przed sobą przebrnięcie przez stworzenie
                własnej strony internetowej. Ważne punkty, które wpłynęły na moją opinię to bardzo uczciwa cena i łatwo
                dostępny kontakt z Panem Dariuszem. Jego zaangażowanie i wiedza widoczne były już w pierwszych mailach,
                w trakcie procesu tylko się to potwierdzało."
              </p>
              <p itemProp="author">- Weronika Elveren</p>
            </div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.testimonial_text}>
              <p>
                <a href="https://maps.app.goo.gl/2UKkcFvoNswxPgof9" target="_blank" rel="noopener noreferrer">
                  Zobacz wszystkie opinie na Google
                </a>
              </p>
            </div>
          </div>
        </div>
        <CallToAction kontakt_2 variant={'bottom'} />
      </div>
    </section>
  );
};

export default Testiniomals;
