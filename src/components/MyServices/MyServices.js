import React from 'react';
import * as styles from './MyServices.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import MyServicesThumbs from '../MyServicesThumbs/MyServicesThumbs';
import MyServicesAccordion from '../MyServicesAccordion/MyServicesAccordion';
import CustomButton from '../CustomButton/CustomButton';
import { QuestionCircle } from 'react-bootstrap-icons';
import Action from '../Action/Action';
import { useMediaQuery } from 'react-responsive';

const MyServices = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' });

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
              Zastanawiasz się, czy wybrać stronę internetową w HTML czy CMS? Chcesz dowiedzieć się, jakie są różnice
              między tymi dwoma rozwiązaniami? Zajrzyj do mojego bloga, gdzie znajdziesz odpowiedzi na te pytania. Albo
              skontaktuj się ze mną, a ja pomogę Ci wybrać najlepsze rozwiązanie dla Twojej firmy.
            </p>
            <CustomButton text="przejdź na mój blog" link={'/blog/'} />
          </div>
        </div>

        <Action />
      </Container>
    </section>
  );
};

export default MyServices;
