import React from 'react';
import * as styles from './LP_MyServices.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../../SectionTitle/SectionTitle';
import CustomButton from '../../CustomButton/CustomButton';
import { QuestionCircle } from 'react-bootstrap-icons';
import Action from '../../Action/Action';
import { useMediaQuery } from 'react-responsive';
import LP_MyServicesThumbs from '../LP_MyServicesThumbs/LP_MyServicesThumbs';
import LP_MyServicesAccordion from '../LP_MyServicesAccordion/LP_MyServicesAccordion';

const LP_MyServices = ({
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
      <Container>
        <SectionTitle title={sectionTitle} coloredText={sectionTitleColored} variant="white" />

        {!isMobile && (
          <LP_MyServicesThumbs
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
          <LP_MyServicesAccordion
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

        <Action />
      </Container>
    </section>
  );
};

export default LP_MyServices;
