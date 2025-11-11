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
              Projektuję i wdrażam <strong>nowoczesne strony internetowe</strong> dla firm z całej Polski - od
              Jastrzębia-Zdroju po Warszawę, Kraków i Gdańsk. Każda realizacja powstaje z myślą o wynikach:{' '}
              <strong>responsywność</strong>, szybkość działania, <strong>intuicyjna obsługa</strong> oraz{' '}
              <strong>optymalizacja SEO</strong> już na etapie projektu. Dzięki temu Twoja strona internetowa
              skuteczniej pozyskuje klientów i wspiera sprzedaż online.
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
                  Jako freelancer oferuję bezpośredni kontakt i pełną odpowiedzialność za wynik. Tworzę
                  <strong> strony internetowe skrojone na miarę</strong> Twojej branży i celów: od prostych wizytówek po
                  rozbudowane serwisy. Masz elastyczność, krótszy czas wdrożenia i <strong>konkurencyjną wycenę</strong>{' '}
                  - bez wielostopniowej biurokracji.
                </p>
              </div>
            </div>
            <div className="second_card text-right">
              <div className="card bg-background-light p-4 rounded-[20px]">
                <h4 className="font-bold">Nie tylko WordPress!!</h4>
                <p>
                  WordPress to świetne narzędzie, ale nie jedyne. W zależności od potrzeb biznesowych tworzę
                  <strong> strony internetowe</strong> i sklepy na różnych technologiach (m.in. czysty HTML/JS,
                  React/Next), aby zapewnić <strong>wydajność</strong>, <strong>bezpieczeństwo</strong> i łatwe
                  rozwijanie projektu w przyszłości.
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
            Realizuję <strong>strony internetowe</strong> dla firm każdej wielkości - od start-upów po duże spółki.
            Potrzebujesz prostej strony czy rozbudowanego serwisu? Zaproponuję rozwiązanie, które podkreśli wizerunek
            marki i pomoże w pozyskiwaniu klientów w całej Polsce.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
