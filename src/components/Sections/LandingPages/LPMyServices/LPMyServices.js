import React from 'react';
import * as styles from './LPMyServices.module.scss';

import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import CustomButton from '../../../Ui/CustomButton/CustomButton';
import { QuestionCircle } from 'react-bootstrap-icons';
import { useMediaQuery } from 'react-responsive';
import LPMyServicesThumbs from '../LPMyServicesThumbs/LPMyServicesThumbs';
import LPMyServicesAccordion from '../LPMyServicesAccordion/LPMyServicesAccordion';
import CallToAction from '../../Shared/CallToAction/CallToAction';

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
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' });

  return (
    <section className={styles.myServices}>
      <div className="container mx-auto px-4">
        <SectionTitle title={sectionTitle} coloredText={sectionTitleColored} variant="white" />

        {!isMobile && (
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
        )}

        {isMobile && (
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
        )}

        <div className={styles.info}>
          <QuestionCircle className={styles.icon} />
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
    </section>
  );
};

export default LPMyServices;
