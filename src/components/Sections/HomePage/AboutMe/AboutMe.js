import React, { useEffect } from 'react';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';
import sal from 'sal.js';

const AboutMe = () => {
  useEffect(() => {
    sal(); // ← ponowna inicjalizacja animacji po zamontowaniu
  }, []);

  return (
    <section id="omnie" className="pt-[250px] pb-[300px] bg-background-lighter ">
      <div className="container mx-auto px-4">
        <SectionTitle title="Kilka słów" coloredText=" o mnie" backgroundText="O mnie" ariaLabel="Kilka słów o mnie" />
        <div className="flex flex-col lg:flex-row justify-between">
          <div
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-duration="1000"
            className="w-full lg:w-1/2 text-center"
          >
            <StaticImage
              src="../../../../images/aboutMe.png"
              alt="Dariusz Wasilewski full-stack web developer"
              placeholder="blurred"
              width={700}
            />
          </div>
          <div
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-duration="1000"
            className="w-full lg:w-1/2 flex flex-col lg:pl-[40px]"
          >
            <h3 className="text-[2.5rem] w-fit font-bold  mb-[20px] text-primary highlighted-text">Cześć</h3>
            <p className="text-text-dark mb-[20px]">
              Cześć! Nazywam się Dariusz Wasilewski i jestem pasjonatem tworzenia nowoczesnych stron internetowych.
              Pochodzę z Jastrzębia-Zdroju, ale realizuję projekty dla klientów z całej Polski. Moja przygoda z
              technologiami internetowymi zaczęła się wiele lat temu – od prostych stron w HTML i CSS, po zaawansowane
              projekty oparte na React i WordPress. Dziś tworzę <strong>strony internetowe</strong>, które łączą
              estetykę, funkcjonalność i szybkość działania. Każda realizacja jest dla mnie czymś więcej niż kodem – to
              indywidualne podejście do potrzeb Twojej marki. Projektuję serwisy, które nie tylko świetnie wyglądają,
              ale są też <strong>intuicyjne w obsłudze</strong>i w pełni <strong>zoptymalizowane pod SEO</strong>, aby
              przyciągały nowych klientów i budowały Twój profesjonalny wizerunek w sieci.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
