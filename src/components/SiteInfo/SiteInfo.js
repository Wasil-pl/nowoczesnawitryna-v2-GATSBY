import React from 'react';
import * as styles from './SiteInfo.module.scss';
import { Card, Container } from 'react-bootstrap';
import CustomButton from '../CustomButton/CustomButton';

const SiteInfo = () => {
  return (
    <section className={styles.SiteInfo}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.firstColumn}>
            <h3>Dlaczego Nowoczesna Witryna?</h3>
            <h4>Oferuję profesjonalne usługi z zakresu tworzenia stron internetowych.</h4>
            <p>Moje strony są responsywne, funkcjonalne, łatwe w zarządzaniu i zoptymalizowane pod kątem SEO.</p>
            <CustomButton variant="dark" text="skontaktuj się" link="/#kontakt" />
          </div>
          <div className={styles.secondColumn}>
            <Card className={`mb-2 ${styles.firstCard}`}>
              <Card.Body>
                <Card.Title>Nie jestem kolejną agencją</Card.Title>
                <Card.Text>
                  Jako freelancer, gwarantuję indywidualne podejście, elastyczność i pełne zaangażowanie w każde
                  zlecenie. Pozwala mi to oferować usługi najwyższej jakości, szybką realizację i atrakcyjne ceny.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className={styles.secondCard}>
              <Card.Body>
                <Card.Title>Co Oferuję?</Card.Title>
                <Card.Text>
                  Bez względu na to, czy szukasz prostej strony wizytówki, sklepu internetowego, bloga, portfolio, czy
                  strony z systemem rezerwacji, posiadam idealne rozwiązanie dla Ciebie.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className={styles.banner}>
          <h3 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="1000">
            Współpracuję z firmami każdego <strong>rodzaju i wielkości</strong>. Bez względu na to, czy prowadzisz mały
            start-up, czy dużą korporację, jestem przekonany, że mogę zaoferować Ci odpowiednie rozwiązania.
          </h3>
        </div>
      </Container>
    </section>
  );
};

export default SiteInfo;
