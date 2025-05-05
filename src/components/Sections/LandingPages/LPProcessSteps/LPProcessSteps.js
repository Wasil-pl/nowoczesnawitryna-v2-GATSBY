import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';

const LPProcessSteps = ({
  sectionTitle,
  sectionTitleColored,
  step1Title,
  step1Description,
  step2Title,
  step2Description,
  step3Title,
  step3Description,
  step4Title,
  step4Description,
  step5Title,
  step5Description,
  step6Title,
  step6Description,
}) => {
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = document.querySelectorAll('.step');
      const windowHeight = window.innerHeight;

      stepElements.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;

        if (elementMiddle < windowHeight * 0.6 && elementMiddle > windowHeight * 0.25) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="process_steps_container">
      <div className="container mx-auto px-4">
        <SectionTitle
          ariaLabel={sectionTitle + sectionTitleColored}
          title={sectionTitle}
          coloredText={sectionTitleColored}
          backgroundText="Proces"
        />
        <div className="process_steps">
          <div className={`step left ${activeStep === 0 ? 'active' : ''} flex flex-row`}>
            <div className="step_empty flex-[1_1_0%]" />
            <div className="step_content step_1 step_brief flex-[3_1_0%]">
              <h3>{step1Title}</h3>
              <p>{step1Description}</p>
            </div>
            <div className="step_number flex-[1_1_0%] text-center m-auto">
              <StaticImage
                src="../../../../images/brief.png"
                alt="ikona przedstawiająca pierwszy kontakt z klientem w celu zebrania informacji o potrzebnej stronie internetowej"
                width={150}
              />
            </div>
          </div>
          <div className={`step right ${activeStep === 1 ? 'active' : ''} flex flex-row md:flex-row-reverse`}>
            <div className="step_empty flex-[1_1_0%]" />
            <div className="step_content step_2 step_info flex-[3_1_0%]">
              <h3>{step2Title}</h3>
              <p>{step2Description}</p>
            </div>
            <div className="step_number_left flex-[1_1_0%] text-center m-auto">
              <StaticImage
                src="../../../../images/kontent.png"
                alt="ikona przedstawiająca zbieranie i przygotowywanie kontentu do strony internetowej"
                width={150}
              />
            </div>
          </div>
          <div className={`step left ${activeStep === 2 ? 'active' : ''} flex flex-row`}>
            <div className="step_empty flex-[1_1_0%]" />
            <div className="step_content step_3 step_projektowanie flex-[3_1_0%]">
              <h3>{step3Title}</h3>
              <p>{step3Description}</p>
            </div>
            <div className="step_number flex-[1_1_0%] text-center m-auto">
              <StaticImage
                src="../../../../images/projektowanie.png"
                alt="ikona przedstawiająca projektowanie strony internetowej"
                width={150}
              />
            </div>
          </div>
          <div className={`step right ${activeStep === 3 ? 'active' : ''} flex flex-row md:flex-row-reverse`}>
            <div className="step_empty flex-[1_1_0%]" />
            <div className="step_content step_4 step_kodowanie flex-[3_1_0%]">
              <h3>{step4Title}</h3>
              <p>{step4Description}</p>
            </div>
            <div className="step_number_left flex-[1_1_0%] text-center m-auto">
              <StaticImage
                src="../../../../images/tworzenie-strony.png"
                alt="ikona przedstawiająca tworzenie strony internetowej"
                width={150}
              />
            </div>
          </div>
          <div className={`step left ${activeStep === 4 ? 'active' : ''} flex flex-row`}>
            <div className="step_empty flex-[1_1_0%]" />
            <div className="step_content step_5 step_testowanie flex-[3_1_0%]">
              <h3>{step5Title}</h3>
              <p>{step5Description}</p>
            </div>
            <div className="step_number flex-[1_1_0%] text-center m-auto">
              <StaticImage
                src="../../../../images/testowanie.png"
                alt="ikona przedstawiająca testowanie strony internetowej"
                width={150}
              />
            </div>
          </div>
          <div className={`step right ${activeStep === 5 ? 'active' : ''} flex flex-row md:flex-row-reverse`}>
            <div className="step_empty flex-[1_1_0%]" />
            <div className="step_content step_6 step_wdrozenie flex-[3_1_0%]">
              <h3>{step6Title}</h3>
              <p>{step6Description}</p>
            </div>
            <div className="step_number_last flex-[1_1_0%] text-center m-auto">
              <StaticImage
                src="../../../../images/koniec.png"
                alt="ikona przedstawiająca wdrożenie strony internetowej"
                width={150}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LPProcessSteps;
