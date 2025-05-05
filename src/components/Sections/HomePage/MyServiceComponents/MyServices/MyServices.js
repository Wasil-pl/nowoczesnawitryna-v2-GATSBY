import React, { useEffect, useState } from 'react';
import './MyServices.scss';
import SectionTitle from '../../../../Ui/SectionTitle/SectionTitle';
import MyServicesThumbs from '../MyServicesThumbs/MyServicesThumbs';
import MyServicesAccordion from '../MyServicesAccordion/MyServicesAccordion';
import CustomButton from '../../../../Ui/CustomButton/CustomButton';
import { useMediaQuery } from 'react-responsive';
import CallToAction from '../../../Shared/CallToAction/CallToAction';
import ShapeDividersTop from '../../../../Ui/ShapeDividers/ShapeDividersTop';
import ShapeDividersBottom from '../../../../Ui/ShapeDividers/ShapeDividersBottom';
import { QuestionMarkCircleIcon } from '../../../../Icons/Icons';
import sal from 'sal.js'; // ← dodane do importów

const MyServices = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const [ParticlesBg, setParticlesBg] = useState(null); // ← PRZENIESIONE WYŻEJ

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('../../../../Ui/ParticlesBackground/ParticlesBackground').then((mod) => {
        setParticlesBg(() => mod.default);
      });
    }
  }, []);

  useEffect(() => {
    sal(); // ← ponowna inicjalizacja animacji po zamontowaniu
  }, []);

  return (
    <section className="myServices bg-background-dark mt-[150px] pt-[200px] pb-[10px] relative">
      <ShapeDividersTop />
      {ParticlesBg && <ParticlesBg id="tsparticles_my_service" />}

      <div className="container mx-auto px-4">
        <SectionTitle
          title="Wszystkie usługi, których"
          coloredText=" potrzebujesz"
          backgroundText="Usługi"
          ariaLabel="wszystkie usługi, których potrzebujesz"
          variant="sections_title_white"
        />

        {!isMobile && <MyServicesThumbs />}
        {isMobile && <MyServicesAccordion />}

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

export default MyServices;
