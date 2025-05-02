import React from 'react';
import * as styles from './MyServices.module.scss';
import SectionTitle from '../../../../Ui/SectionTitle/SectionTitle';
import MyServicesThumbs from '../MyServicesThumbs/MyServicesThumbs';
import MyServicesAccordion from '../MyServicesAccordion/MyServicesAccordion';
import CustomButton from '../../../../Ui/CustomButton/CustomButton';
import { useMediaQuery } from 'react-responsive';
import CallToAction from '../../../Shared/CallToAction/CallToAction';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import ParticlesBackground from '../../../../Ui/ParticlesBackground/ParticlesBackground';
import ShapeDividersTop from '../../../../Ui/ShapeDividers/ShapeDividersTop';
import ShapeDividersBottom from '../../../../Ui/ShapeDividers/ShapeDividersBottom';

const MyServices = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' });

  return (
    <section className={styles.myServices}>
      <ShapeDividersTop />
      <ParticlesBackground id={'tsparticles_my_service'} />

      <div className="container mx-auto px-4">
        <SectionTitle
          title="Wszystkie usługi, których"
          coloredText=" potrzebujesz"
          backgroundText="Usługi"
          ariaLabel="wszystkie usługi, których potrzebujesz"
          variant="white"
        />

        {!isMobile && <MyServicesThumbs />}

        {isMobile && <MyServicesAccordion />}

        <div className={styles.info}>
          <QuestionMarkCircleIcon className={styles.icon} />
          <div className={styles.content}>
            <h3>HTML czy CMS</h3>
            <p>
              Zastanawiasz się, czy wybrać stronę internetową w HTML czy CMS? Chcesz dowiedzieć się, jakie są różnice
              między tymi dwoma rozwiązaniami? Zajrzyj do mojego bloga, gdzie znajdziesz odpowiedzi na te pytania. Albo
              skontaktuj się ze mną, a ja pomogę Ci wybrać najlepsze rozwiązanie dla Twojej firmy.
            </p>
            <CustomButton text="przejdź na mój blog" link={'/blog/'} />
          </div>
        </div>

        <CallToAction />
      </div>

      <ShapeDividersBottom variant="f7f7f7" />
    </section>
  );
};

export default MyServices;
