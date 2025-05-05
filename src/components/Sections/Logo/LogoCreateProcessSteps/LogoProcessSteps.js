import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';
import './LogoProcessSteps.scss';

const LogoProcessSteps = () => {
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = document.querySelectorAll('.step');
      const windowHeight = window.innerHeight;

      stepElements.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;

        if (elementMiddle < windowHeight * 0.75 && elementMiddle > windowHeight * 0.25) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="process_steps_container logo_process_steps">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Mój proces projektowania"
          coloredText=" Logo"
          backgroundText="Proces"
          ariaLabel="Mój proces projektowania logo"
        />
        <div className="process_steps flex flex-col mx-auto max-w-[1200px]">
          <div className={`step left flex ${activeStep === 0 ? 'active' : ''} mx-[50px] my-[50px]`}>
            <div className="step_empty flex-[1_1_0%]"></div>
            <div className="step_content step_1 step_brief flex-[3_1_0%] p-[20px] relative text-right">
              <h3>Brief i Konsultacja</h3>
              <p>
                Zaczynamy od rozmowy na temat Twojej wizji. Zbieram informacje o Twojej firmie, jej celach, grupie
                docelowej i preferencjach estetycznych. Ten etap pomaga mi zrozumieć, jakie logo najlepiej odzwierciedli
                charakter Twojej marki.
              </p>
            </div>
            <div className="step_number flex-[1_1_0%] text-center m-auto">
              <StaticImage
                src="../../../../images/brief.png"
                alt="ikona przedstawiająca pierwszy kontakt z klientem w celu zebrania informacji o potrzenym logo"
                width={150}
              />
            </div>
          </div>

          <div className={`step right flex flex-row-reverse ${activeStep === 1 ? 'active' : ''} mx-[50px] my-[50px]`}>
            <div className="step_empty flex-[1_1_0%]"></div>
            <div className="step_content step_2 step_info flex-[3_1_0%] p-[20px] relative text-left">
              <h3>Tworzenie koncepcji</h3>
              <p>
                Na podstawie briefu tworzę 3-5 unikalnych koncepcji logo, które są zgodne z Twoimi wymaganiami i wizją.
                Każdy projekt jest starannie zaprojektowany, aby pasował do branży, w której działa Twoja firma.
              </p>
            </div>
            <div className="step_number_left flex-[1_1_0%] text-center m-auto">
              <StaticImage
                src="../../../../images/kontent.png"
                alt="ikona przedstawiająca pierwsze prace stworzenia logo"
                width={150}
              />
            </div>
          </div>

          <div className={`step left flex ${activeStep === 2 ? 'active' : ''} mx-[50px] my-[50px]`}>
            <div className="step_empty flex-[1_1_0%]"></div>
            <div className="step_content step_3 step_projektowanie flex-[3_1_0%] p-[20px] relative text-right">
              <h3>Wybór projektu i poprawki</h3>
              <p>
                Wybierasz najbardziej odpowiadającą Ci koncepcję. Następnie wprowadzam ewentualne poprawki, zgodnie z
                Twoimi uwagami, aż logo będzie w pełni spełniało Twoje oczekiwania.
              </p>
            </div>
            <div className="step_number flex-[1_1_0%] text-center m-auto">
              <StaticImage
                src="../../../../images/projektowanie.png"
                alt="ikona przedstawiająca projektowanie właściwego logo"
                width={150}
              />
            </div>
          </div>

          <div className={`step right flex flex-row-reverse ${activeStep === 3 ? 'active' : ''} mx-[50px] my-[50px]`}>
            <div className="step_empty flex-[1_1_0%]"></div>
            <div className="step_content step_4 step_kodowanie flex-[3_1_0%] p-[20px] relative text-left">
              <h3>Finalizacja i dostarczenie plików</h3>
              <p>
                Po akceptacji dostarczam finalne logo w różnych formatach, gotowych do użycia na stronie internetowej,
                materiałach drukowanych i innych nośnikach (PNG, SVG, PDF). Logo otrzymasz w wersji kolorowej oraz
                monochromatycznej.
              </p>
            </div>
            <div className="step_number_left flex-[1_1_0%] text-center m-auto">
              <StaticImage
                src="../../../../images/tworzenie-strony.png"
                alt="ikona przedstawiająca finalną wersję logo "
                width={150}
              />
            </div>
          </div>

          <div className={`step left flex ${activeStep === 4 ? 'active' : ''} mx-[50px] my-[50px]`}>
            <div className="step_empty flex-[1_1_0%]"></div>
            <div className="step_content step_5 step_wdrozenie flex-[3_1_0%] p-[20px] relative text-right">
              <h3>Wsparcie</h3>
              <p>
                Po zakończeniu projektu oferuję dodatkowe wsparcie, jeśli będziesz potrzebować pomocy przy implementacji
                logo na stronie internetowej, mediach społecznościowych lub materiałach drukowanych.
              </p>
            </div>
            <div className="step_number_last flex-[1_1_0%] text-center m-auto">
              <StaticImage
                src="../../../../images/koniec.png"
                alt="ikona przedstawiająca wsparcie po zakończeniu projektu"
                width={150}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoProcessSteps;
