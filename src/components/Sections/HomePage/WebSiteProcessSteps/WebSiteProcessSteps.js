import React, { useEffect } from 'react';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';
import sal from 'sal.js';
import './WebSiteProcessSteps.scss';

const WebSiteProcessSteps = () => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <section className="process_steps_container">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Mój proces projektowania"
          coloredText=" stron internetowych"
          backgroundText="Proces"
          ariaLabel="Mój proces projektowania stron internetowych"
        />

        <div className="process_steps">
          {/* ─────────────── STEP 1 ─────────────── */}
          <div
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={`step left active_proces flex flex-row`}
          >
            <div className="step_empty flex-[1_1_0%]" />
            <div className="step_content step_1 step_brief flex-[3_1_0%]">
              <h3>Brief i Konsultacja</h3>
              <p>
                Na początek ustalamy Twoje oczekiwania, wizję i preferencje dotyczące Twojej strony internetowej.
                Zbieram informacje o Twojej firmie, aby stworzyć taką stronę, która najlepiej ją reprezentuje.
              </p>
            </div>
            <div className="step_number flex-[1_1_0%] text-center m-auto">
              <StaticImage src="../../../../images/brief.png" alt="Pierwszy kontakt i brief" width={150} />
            </div>
          </div>

          {/* ─────────────── STEP 2 ─────────────── */}
          <div
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={`step right active_proces  flex flex-row md:flex-row-reverse`}
          >
            <div className="step_empty flex-[1_1_0%]" />
            <div className="step_content step_2 step_info flex-[3_1_0%]">
              <h3>Zbieranie i Przygotowywanie kontentu</h3>
              <p>
                W tym kroku zbieram wszelkie materiały potrzebne do stworzenia strony internetowej, takie jak teksty,
                grafiki, zdjęcia oraz inne elementy wizualne. Jeśli nie masz gotowego kontentu, mogę pomóc w jego
                przygotowaniu, aby strona była spójna i atrakcyjna wizualnie.
              </p>
            </div>
            <div className="step_number_left flex-[1_1_0%] text-center m-auto">
              <StaticImage src="../../../../images/kontent.png" alt="Zbieranie kontentu do strony" width={150} />
            </div>
          </div>

          {/* ─────────────── STEP 3 ─────────────── */}
          <div
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={`step left active_proces  flex flex-row`}
          >
            <div className="step_empty flex-[1_1_0%]" />
            <div className="step_content step_3 step_projektowanie flex-[3_1_0%]">
              <h3>Projektowanie</h3>
              <p>
                Na podstawie Twoich wymagań tworzę wstępny projekt graficzny strony, który będzie odzwierciedlać Twój
                unikalny styl i potrzeby.
              </p>
            </div>
            <div className="step_number flex-[1_1_0%] text-center m-auto">
              <StaticImage src="../../../../images/projektowanie.png" alt="Projektowanie strony" width={150} />
            </div>
          </div>

          {/* ─────────────── STEP 4 ─────────────── */}
          <div
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={`step right active_proces  flex flex-row md:flex-row-reverse`}
          >
            <div className="step_empty flex-[1_1_0%]" />
            <div className="step_content step_4 step_kodowanie flex-[3_1_0%]">
              <h3>Tworzenie Strony Internetowej</h3>
              <p>
                Po akceptacji projektu przechodzę do kodowania i tworzenia funkcjonalnej strony internetowej. Strona
                jest responsywna, zoptymalizowana pod kątem SEO i łatwa w zarządzaniu.
              </p>
            </div>
            <div className="step_number_left flex-[1_1_0%] text-center m-auto">
              <StaticImage src="../../../../images/tworzenie-strony.png" alt="Kodowanie strony" width={150} />
            </div>
          </div>

          {/* ─────────────── STEP 5 ─────────────── */}
          <div
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={`step left active_proces  flex flex-row`}
          >
            <div className="step_empty flex-[1_1_0%]" />
            <div className="step_content step_5 step_testowanie flex-[3_1_0%]">
              <h3>Testowanie i Optymalizacja</h3>
              <p>
                Przed wdrożeniem testuję stronę na różnych urządzeniach i przeglądarkach, aby upewnić się, że działa bez
                zarzutu.
              </p>
            </div>
            <div className="step_number flex-[1_1_0%] text-center m-auto">
              <StaticImage src="../../../../images/testowanie.png" alt="Testowanie strony" width={150} />
            </div>
          </div>

          {/* ─────────────── STEP 6 ─────────────── */}
          <div
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={`step right active_proces  flex flex-row md:flex-row-reverse`}
          >
            <div className="step_empty flex-[1_1_0%]" />
            <div className="step_content step_6 step_wdrozenie flex-[3_1_0%]">
              <h3>Wdrożenie i Wsparcie</h3>
              <p>
                Po finalnej akceptacji, Twoja strona internetowa jest publikowana. Oferuję wsparcie techniczne po
                wdrożeniu, aby upewnić się, że strona działa bez zarzutu, a także pomagam w jej aktualizacjach.{' '}
              </p>
            </div>
            <div className="step_number_last flex-[1_1_0%] text-center m-auto">
              <StaticImage src="../../../../images/koniec.png" alt="Wdrożenie strony" width={150} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebSiteProcessSteps;
