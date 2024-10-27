import React from 'react';
import * as styles from './SiteInfo.module.scss';
import { Card, Container } from 'react-bootstrap';
import CustomButton from '../CustomButton/CustomButton';

const SiteInfo = () => {
  return (
    <section className={styles.site_info}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.first_column}>
            <h3>
              Dlaczego Warto Wybrać Moje Usługi <em>Tworzenia Stron Internetowych?</em>
            </h3>
            <p>
              Oferuję kompleksowe tworzenie stron internetowych, które są nie tylko <strong>responsywne</strong> i{' '}
              <strong>funkcjonalne</strong>, ale także <strong>łatwe w zarządzaniu</strong> oraz w pełni{' '}
              <strong>zoptymalizowane pod kątem SEO</strong>. Każda strona, którą tworzę, jest zaprojektowana z myślą o
              użytkowniku oraz zgodnie z najnowszymi trendami i technologiami, aby zapewnić najwyższą jakość i
              efektywność w sieci.
            </p>
            <CustomButton variant="dark" text="Skontaktuj się" link="#kontakt" />
          </div>
          <div className={styles.second_column}>
            <Card className={`mb-2 ${styles.first_card}`}>
              <Card.Body>
                <Card.Title as={'h3'}>
                  <em>Freelancer</em>, nie agencja
                </Card.Title>
                <Card.Text>
                  Jako freelancer oferuję bardziej indywidualne podejście niż typowe agencje. Tworzę{' '}
                  <em>strony internetowe</em>
                  skrojone na miarę potrzeb Twojej firmy, zapewniając pełną elastyczność, szybkie wdrożenie oraz
                  konkurencyjne ceny. Każde zlecenie to dla mnie pełne zaangażowanie i najwyższa jakość.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className={styles.second_card}>
              <Card.Body>
                <Card.Title as={'h3'}>Nie tylko WordPress!!</Card.Title>
                <Card.Text>
                  W odróżnieniu od wielu freelancerów, nie ograniczam się jedynie do <em>WordPressa</em>. Dzięki moim
                  umiejętnościom programistycznym mogę tworzyć <em>strony internetowe</em> na różnych platformach i
                  dostosowywać je do Twoich specyficznych potrzeb.
                  <span>
                    <strong>
                      <a href="#omnie"> Zobacz moje umiejętności i doświadczenie.</a>
                    </strong>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className={styles.banner}>
          <h3 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="1000">
            <em>Tworzę strony internetowe</em> dla firm każdej wielkości – od małych start-upów po duże korporacje. Bez
            względu na to, jaką firmę prowadzisz, jestem pewien, że mogę zaproponować <em>strony internetowe</em>, które
            spełnią Twoje oczekiwania i będą idealnym rozwiązaniem dla Twojego biznesu.
          </h3>
        </div>
      </Container>
    </section>
  );
};

export default SiteInfo;
