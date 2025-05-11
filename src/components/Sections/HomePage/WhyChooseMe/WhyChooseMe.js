import React, { useEffect } from 'react';
import CustomButton from '../../../Ui/CustomButton/CustomButton';
import sal from 'sal.js';
import './WhyChooseMe.scss';

const WhyChooseMe = () => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <section className="site_info">
      <div className="container mx-auto px-4">
        <div className="wrapper flex flex-col lg:flex-row relative z-[1] shadow-box rounded-[20px] mt-[-110px] mb-0">
          <div className="first_column flex-[1_1_0%] p-8 bg-background-primary rounded-t-[20px] lg:rounded-l-[20px] lg:rounded-tr-none flex flex-col justify-between items-start gap-5 text-text-dark">
            <h3 className="font-bold text-[1.7rem]">
              Dlaczego Warto Wybrać Moje Usługi Tworzenia Nowoczesnych Stron Internetowych?
            </h3>
            <p>
              Oferuję kompleksowe usługi w zakresie{' '}
              <em>tworzenia stron internetowych dla klientów Jastrzębia-Zdroju</em>, województwa śląskiego oraz całej
              Polski. Strony, które są nie tylko <strong>responsywne</strong> i <strong>funkcjonalne</strong>, ale także{' '}
              <strong>łatwe w zarządzaniu</strong> oraz w pełni <strong>zoptymalizowane pod kątem SEO</strong>. Każda
              strona internetowa lub sklep online, jest zaprojektowana z myślą o użytkowniku oraz zgodna z najnowszymi
              trendami i technologiami. A wszystko to, aby zapewnić najwyższą jakość i efektywność w sieci.
            </p>
            <div className="mx-auto">
              <CustomButton variant="dark" text="Skontaktuj się" link="/kontakt/" />
            </div>
          </div>

          <div className="second_column flex-[1_1_0%] p-8 bg-background-lighter rounded-b-[20px] lg:rounded-r-[20px] lg:rounded-bl-none flex flex-col gap-4">
            <div className="first_card text-left mb-2">
              <div className="card bg-background-light p-4 rounded-[20px]">
                <h4 className="font-bold">
                  <em>Freelancer</em>, nie agencja
                </h4>
                <p>
                  Jako freelancer oferuję bardziej indywidualne podejście niż typowe agencje. Tworzę nowoczesne strony
                  internetowe, skrojone na miarę potrzeb Twojej firmy. Zapewniając przy tym pełną elastyczność, szybkie
                  wdrożenie oraz konkurencyjne ceny. Każde zlecenie to dla mnie pełne zaangażowanie i najwyższa jakość.
                </p>
              </div>
            </div>
            <div className="second_card text-right">
              <div className="card bg-background-light p-4 rounded-[20px]">
                <h4 className="font-bold">Nie tylko WordPress!!</h4>
                <p>
                  W odróżnieniu od wielu freelancerów, nie ograniczam się jedynie do WordPressa. Dzięki moim
                  umiejętnościom programistycznym mogę tworzyć strony, sklepy interentowe, na różnych platformach i
                  dostosowywać je do Twoich specyficznych potrzeb klientów oraz branży.
                </p>
                <span>
                  <strong>
                    <a href="#omnie" className=" font-bold uppercase tracking-[2px] no-underline hover:text-primary">
                      <p>Zobacz moje umiejętności i doświadczenie.</p>
                    </a>
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="banner mt-[100px] bg-background-primary p-8 rounded-[20px] shadow-box"
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <p className="text-[1.5rem] font-bold text-center">
            Tworzę strony internetowe dla firm każdej wielkości – od małych start-upów po duże korporacje. Bez względu
            na to, jaką firmę prowadzisz, jestem pewien, że mogę zaproponować stronę lub sklep, które spełnią Twoje
            oczekiwania i będą idealnym rozwiązaniem dla Twojego biznesu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
