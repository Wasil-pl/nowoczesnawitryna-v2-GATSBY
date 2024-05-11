import React, { useEffect, useState } from 'react';
import * as styles from './MyServices.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import MyServicesThumbs from '../MyServicesThumbs/MyServicesThumbs';
import MyServicesAccordion from '../MyServicesAccordion/MyServicesAccordion';
import CustomButton from '../CustomButton/CustomButton';
import { ArrowRight, QuestionCircle } from 'react-bootstrap-icons';

const MyServices = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window === undefined) return;
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <section className={styles.myServices}>
      <Container>
        <SectionTitle title="Wszystkie usługi, których" coloredText=" potrzebujesz" variant="white" />

        {!isMobile && <MyServicesThumbs />}

        {isMobile && <MyServicesAccordion />}

        <div className={styles.info}>
          <QuestionCircle className={styles.icon} />
          <div className={styles.content}>
            <h3>HTML czy CMS</h3>
            <p>
              Zastanawiasz się, czy wybrać stronę w HTML czy CMS? Chcesz dowiedzieć się, jakie są różnice między tymi
              dwoma rozwiązaniami? Zajrzyj do mojego bloga, gdzie znajdziesz odpowiedzi na te pytania. Albo skontaktuj
              się ze mną, a ja pomogę Ci wybrać najlepsze rozwiązanie dla Twojej firmy.
            </p>
            <CustomButton text="przejdź na mój blog" />
          </div>
        </div>

        <div className={styles.action}>
          <div className={styles.left_side}>
            <h3>Masz projekt?</h3>
            <h4>Skontaktuj się ze mna...</h4>
          </div>
          <div className={styles.right_side}>
            <a href="#contact">
              <ArrowRight />
              <br />
              <span className={styles.text}>Nie czekaj, napisz do mnie</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MyServices;
