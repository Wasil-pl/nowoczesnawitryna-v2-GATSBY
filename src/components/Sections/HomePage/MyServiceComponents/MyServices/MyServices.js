import React, { useEffect } from 'react';
import loadable from '@loadable/component';
import './MyServices.scss';
import SectionTitle from '../../../../Ui/SectionTitle/SectionTitle';
import MyServicesThumbs from '../MyServicesThumbs/MyServicesThumbs';
import MyServicesAccordion from '../MyServicesAccordion/MyServicesAccordion';
import CustomButton from '../../../../Ui/CustomButton/CustomButton';
import CallToAction from '../../../Shared/CallToAction/CallToAction';
import ShapeDividersTop from '../../../../Ui/ShapeDividers/ShapeDividersTop';
import ShapeDividersBottom from '../../../../Ui/ShapeDividers/ShapeDividersBottom';
import { QuestionMarkCircleIcon } from '../../../../Icons/Icons';
import sal from 'sal.js'; // ← dodane do importów
import ResponsiveSwitch from '../../../../Functions/ResponsiveSwitch';
import CompareCmsVsStatic from '../../CompareCmsVsStatic/CompareCmsVsStatic';

const ParticlesBg = loadable(() => import('../../../../Ui/ParticlesBackground/ParticlesBackground'), {
  ssr: false,
  fallback: null,
});

const MyServices = () => {
  useEffect(() => {
    sal(); // ← ponowna inicjalizacja animacji po zamontowaniu
  }, []);

  return (
    <section className="myServices bg-background-dark mt-[150px] pt-[200px] pb-[10px] relative">
      <ShapeDividersTop />

      <ParticlesBg id="tsparticles_my_service" />

      <div className="container mx-auto px-4">
        <SectionTitle
          title="Wszystkie usługi, których"
          coloredText=" potrzebujesz"
          backgroundText="Usługi"
          ariaLabel="wszystkie usługi, których potrzebujesz"
          variant="sections_title_white"
        />

        <ResponsiveSwitch desktop={<MyServicesThumbs />} mobile={<MyServicesAccordion />} fallback={null} />

        <div className="info flex mt-[140px] mb-[100px] relative">
          <QuestionMarkCircleIcon width={50} height={50} />
          <div className="content basis-[70%] ml-[30px]">
            <h3 className="text-[1.2rem] text-text-light font-extrabold uppercase mb-[1rem]">HTML czy CMS</h3>
            <p className="text-text-light mb-[2rem]">
              Zastanawiasz się, jaka strona internetowa będzie najlepsza dla Twojej firmy? Poniżej znajdziesz porównanie
              dwóch najczęściej wybieranych rozwiązań przy <strong>tworzeniu stron internetowych</strong> – systemu
              WordPress i strony HTML (Gatsby).
            </p>
          </div>
        </div>

        <CompareCmsVsStatic />

        <CallToAction />
      </div>

      <ShapeDividersBottom variant="f7f7f7" />
    </section>
  );
};

export default MyServices;
