import React, { useEffect, useState } from 'react';
import * as styles from './MyServices.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import MyServicesThumbs from '../MyServicesThumbs/MyServicesThumbs';
import MyServicesAccordion from '../MyServicesAccordion/MyServicesAccordion';

const MyServices = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className={styles.myServices}>
      <Container>
        <SectionTitle title="Wszystkie usługi, których" coloredText="potrzebujesz" variant="white" />

        {!isMobile && <MyServicesThumbs />}

        {isMobile && <MyServicesAccordion />}
      </Container>
    </div>
  );
};

export default MyServices;
