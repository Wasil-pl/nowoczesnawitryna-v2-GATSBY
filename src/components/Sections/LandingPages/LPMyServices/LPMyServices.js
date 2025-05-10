import React, { Suspense, useEffect, useState } from 'react';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import CustomButton from '../../../Ui/CustomButton/CustomButton';
import { QuestionMarkCircleIcon } from '../../../Icons/Icons';
import LPMyServicesThumbs from '../LPMyServicesThumbs/LPMyServicesThumbs';
import LPMyServicesAccordion from '../LPMyServicesAccordion/LPMyServicesAccordion';
import CallToAction from '../../Shared/CallToAction/CallToAction';
import ShapeDividersBottom from '../../../Ui/ShapeDividers/ShapeDividersBottom';
import ShapeDividersTop from '../../../Ui/ShapeDividers/ShapeDividersTop';
import ResponsiveSwitch from '../../../Functions/ResponsiveSwitch';

const LPMyServices = ({
  title_HTML,
  description_HTML,
  title_web_apps,
  description_web_apps,
  title_wordpress,
  description_wordpress,
  title_ecommerce,
  description_ecommerce,
  title_lms,
  description_lms,
  title_logo,
  description_logo,
  sectionTitle,
  sectionTitleColored,
}) => {
  const [ParticlesBg, setParticlesBg] = useState(null); // ← PRZENIESIONE WYŻEJ

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = () =>
        import('../../../Ui/ParticlesBackground/ParticlesBackground').then((mod) => setParticlesBg(() => mod.default));

      if ('requestIdleCallback' in window) {
        requestIdleCallback(loader);
      } else {
        setTimeout(loader, 1000);
      }
    }
  }, []);

  return (
    <section className="myServices bg-background-dark mt-[150px] pt-[200px] pb-[10px] relative">
      <ShapeDividersTop />

      {ParticlesBg && (
        <Suspense fallback={null}>
          <ParticlesBg id="tsparticles_lp_my_service" />
        </Suspense>
      )}

      <div className="container mx-auto px-4">
        <SectionTitle
          ariaLabel={sectionTitle + sectionTitleColored}
          title={sectionTitle}
          coloredText={sectionTitleColored}
          backgroundText="Usługi"
          variant="sections_title_white"
        />

        <ResponsiveSwitch
          desktop={
            <LPMyServicesThumbs
              title_HTML={title_HTML}
              description_HTML={description_HTML}
              title_web_apps={title_web_apps}
              description_web_apps={description_web_apps}
              title_wordpress={title_wordpress}
              description_wordpress={description_wordpress}
              title_ecommerce={title_ecommerce}
              description_ecommerce={description_ecommerce}
              title_lms={title_lms}
              description_lms={description_lms}
              title_logo={title_logo}
              description_logo={description_logo}
            />
          }
          mobile={
            <LPMyServicesAccordion
              title_HTML={title_HTML}
              description_HTML={description_HTML}
              title_web_apps={title_web_apps}
              description_web_apps={description_web_apps}
              title_wordpress={title_wordpress}
              description_wordpress={description_wordpress}
              title_ecommerce={title_ecommerce}
              description_ecommerce={description_ecommerce}
              title_lms={title_lms}
              description_lms={description_lms}
              title_logo={title_logo}
              description_logo={description_logo}
            />
          }
          fallback={null}
        />

        <div className="info flex mt-[140px] mb-[100px] relative">
          <QuestionMarkCircleIcon width={50} height={50} />
          <div className="content basis-[70%] ml-[30px]">
            <h3 className="text-[1.2rem] text-text-light font-extrabold uppercase mb-[1rem]">HTML czy CMS</h3>
            <p className="text-text-light mb-[2rem]">
              Zastanawiasz się, czy wybrać stronę internetową w HTML czy CMS? Chcesz dowiedzieć się, jakie są różnice
              między tymi dwoma rozwiązaniami? Zajrzyj do mojego bloga, gdzie znajdziesz odpowiedzi na te pytania. Albo
              skontaktuj się ze mną, a ja pomogę Ci wybrać najlepsze rozwiązanie dla Twojej firmy.
            </p>
            <CustomButton text="przejdź na mój blog" link="/blog/" />
          </div>
        </div>

        <CallToAction />
      </div>

      <ShapeDividersBottom variant="f7f7f7" />
    </section>
  );
};

export default LPMyServices;
