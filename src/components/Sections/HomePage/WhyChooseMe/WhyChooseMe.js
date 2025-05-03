import React from 'react';
import * as styles from './WhyChooseMe.module.scss';
import CustomButton from '../../../Ui/CustomButton/CustomButton';

const WhyChooseMe = () => {
  return (
    <section className={styles.site_info}>
      <div className="container mx-auto px-4">
        <div className={styles.wrapper}>
          <div className={styles.first_column}>
            <h3>Dlaczego Warto Wybrać Moje Usługi Tworzenia Nowoczesnych Stron Internetowych?</h3>
            <p>
              Oferuję kompleksowe usługi w zakresie{' '}
              <em>tworzenia stron internetowych dla klientów Jastrzębia-Zdroju</em>, województwa śląskiego oraz całej
              Polski. Strony, które są nie tylko <strong>responsywne</strong> i <strong>funkcjonalne</strong>, ale także{' '}
              <strong>łatwe w zarządzaniu</strong> oraz w pełni <strong>zoptymalizowane pod kątem SEO</strong>. Każda
              strona internetowa lub sklep online, jest zaprojektowana z myślą o użytkowniku oraz zgodna z najnowszymi
              trendami i technologiami. A wszystko to, aby zapewnić najwyższą jakość i efektywność w sieci.
            </p>
            <CustomButton variant="dark" text="Skontaktuj się" link="/kontakt/" />
          </div>
          <div className={styles.second_column}>
            <div className={`mb-2 ${styles.first_card}`}>
              <div className={styles.card}>
                <h3>
                  <em>Freelancer</em>, nie agencja
                </h3>
                <div>
                  Jako freelancer oferuję bardziej indywidualne podejście niż typowe agencje. Tworzę nowoczesne strony
                  internetowe, skrojone na miarę potrzeb Twojej firmy. Zapewniając przy tym pełną elastyczność, szybkie
                  wdrożenie oraz konkurencyjne ceny. Każde zlecenie to dla mnie pełne zaangażowanie i najwyższa jakość.
                </div>
              </div>
            </div>
            <div className={styles.second_card}>
              <div className={styles.card}>
                <h3>Nie tylko WordPress!!</h3>
                <div>
                  W odróżnieniu od wielu freelancerów, nie ograniczam się jedynie do WordPressa. Dzięki moim
                  umiejętnościom programistycznym mogę tworzyć strony, sklepy interentowe, na różnych platformach i
                  dostosowywać je do Twoich specyficznych potrzeb klientów oraz branży.
                  <span>
                    <strong>
                      <a href="#omnie"> Zobacz moje umiejętności i doświadczenie.</a>
                    </strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={styles.banner}
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <h3>
            Tworzę strony internetowe dla firm każdej wielkości – od małych start-upów po duże korporacje. Bez względu
            na to, jaką firmę prowadzisz, jestem pewien, że mogę zaproponować stronę lub sklep, które spełnią Twoje
            oczekiwania i będą idealnym rozwiązaniem dla Twojego biznesu.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
