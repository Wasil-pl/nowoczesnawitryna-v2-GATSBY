import React from 'react';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { UserCheck, BadgeCheck, Server, Code2, Building2, LifeBuoy } from 'lucide-react';

const ValueProposition = () => {
  return (
    <section id={'dlaczego-ja'} className={`value-props relative py-[150px] bg-background-lighter`}>
      <div className="container mx-auto px-4">
        {/* Tytuł */}

        <SectionTitle
          title={'Dlaczego warto'}
          coloredText={'wybrać właśnie mnie'}
          subtitle={
            'Setki ofert mówią o „nowoczesnych stronach”. U mnie priorytetem są jakość, komunikacja i realne wsparcie po wdrożeniu.'
          }
          backgroundText={'wartość'}
        />

        {/* Kafelki */}
        <div className="mt-[80px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* 1 */}
          <div
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-duration="1000"
            className="group bg-background-light rounded-[20px] p-6 shadow-box transition duration-300 ease-in-out hover:scale-[1.03]"
          >
            <div className="flex justify-center items-center mb-5">
              <UserCheck className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-[1.35rem] font-bold text-text-dark text-center">Bez pośredników</h3>
            <p className="mt-3 text-text-dark text-center">
              Współpraca odbywa się bezpośrednio ze mną — od koncepcji po publikację. Szybkie decyzje, pełna
              odpowiedzialność.
            </p>
          </div>

          {/* 2 */}
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="1000"
            className="group bg-background-light rounded-[20px] p-6 shadow-box transition duration-300 ease-in-out hover:scale-[1.03]"
          >
            <div className="flex justify-center items-center mb-5">
              <BadgeCheck className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-[1.35rem] font-bold text-text-dark text-center">Transparentna wycena</h3>
            <p className="mt-3 text-text-dark text-center">
              Jasny zakres i stała cena. Zero ukrytych kosztów, zero przykrych niespodzianek po wdrożeniu.
            </p>
          </div>

          {/* 3 */}
          <div
            data-sal="slide-left"
            data-sal-delay="200"
            data-sal-duration="1000"
            className="group bg-background-light rounded-[20px] p-6 shadow-box transition duration-300 ease-in-out hover:scale-[1.03]"
          >
            <div className="flex justify-center items-center mb-5">
              <Server className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-[1.35rem] font-bold text-text-dark text-center">Hosting i domena w cenie</h3>
            <p className="mt-3 text-text-dark text-center">
              Kompletny pakiet startowy: wykonanie, uruchomienie i utrzymanie strony przez pierwszy rok — bez
              dodatkowych formalności.
            </p>
          </div>

          {/* 4 */}
          <div
            data-sal="slide-right"
            data-sal-delay="250"
            data-sal-duration="1000"
            className="group bg-background-light rounded-[20px] p-6 shadow-box transition duration-300 ease-in-out hover:scale-[1.03]"
          >
            <div className="flex justify-center items-center mb-5">
              <Code2 className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-[1.35rem] font-bold text-text-dark text-center">Technologia dobrana do projektu</h3>
            <p className="mt-3 text-text-dark text-center">
              Gatsby/React, WordPress, Tailwind — dobieram narzędzia do celów, nie odwrotnie. Skupiam się na wydajności
              i skalowalności.
            </p>
          </div>

          {/* 5 */}
          <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="1000"
            className="group bg-background-light rounded-[20px] p-6 shadow-box transition duration-300 ease-in-out hover:scale-[1.03]"
          >
            <div className="flex justify-center items-center mb-5">
              <Building2 className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-[1.35rem] font-bold text-text-dark text-center">Dopasowanie do branży</h3>
            <p className="mt-3 text-text-dark text-center">
              Od małych firm po e-commerce i LMS — projektuję pod realne potrzeby biznesu, nie pod szablon.
            </p>
          </div>

          {/* 6 */}
          <div
            data-sal="slide-left"
            data-sal-delay="350"
            data-sal-duration="1000"
            className="group bg-background-light rounded-[20px] p-6 shadow-box transition duration-300 ease-in-out hover:scale-[1.03]"
          >
            <div className="flex justify-center items-center mb-5">
              <LifeBuoy className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-[1.35rem] font-bold text-text-dark text-center">Stałe wsparcie po wdrożeniu</h3>
            <p className="mt-3 text-text-dark text-center">
              Aktualizacje, rozwój, doradztwo. Nie zostawiam Cię samego po starcie — pomagam rosnąć.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-[50px] text-center">
          <div className="mt-4">
            <a href="#proces" className="font-bold uppercase tracking-[2px] no-underline hover:text-primary">
              Zobacz, jak pracuję krok po kroku
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
