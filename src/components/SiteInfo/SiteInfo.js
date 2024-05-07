import * as React from 'react';
import * as styles from './SiteInfo.module.scss';
import { Button, Card, Container } from 'react-bootstrap';

const SiteInfo = () => {
  return (
    <section className={styles.SiteInfo}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.firstColumn}>
            <h3>Dlaczego Nowoczesna Witryna?</h3>
            <h4>Oferuję profesjonalne usługi z zakresu tworzenia stron internetowych.</h4>
            <p>Moje strony są responsywne, funkcjonalne, łatwe w zarządzaniu i zoptymalizowane pod kątem SEO.</p>
            <Button>Skontaktuj się ze mną</Button>
          </div>
          <div className={styles.secondColumn}>
            <Card>
              <Card.Body>
                <Card.Title>Nie jestem kolejną agencją</Card.Title>
                <Card.Text>
                  Jako freelancer, gwarantuję indywidualne podejście, elastyczność i pełne zaangażowanie w każde
                  zlecenie. Pozwala mi to oferować usługi najwyższej jakości, szybką realizację i atrakcyjne ceny.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
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
      </Container>
    </section>
  );
};

export default SiteInfo;
