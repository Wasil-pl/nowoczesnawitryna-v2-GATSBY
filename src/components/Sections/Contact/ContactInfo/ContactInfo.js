import React from 'react';
import * as styles from './ContactInfo.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import { HouseFill } from 'react-bootstrap-icons';

const ContactInfo = () => {
  return (
    <div className={styles.contact_info}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <SectionTitle title="Adres" subtitle="Zobacz na mapie, gdzie się znajduję" />
            <div data-sal="slide-right" data-sal-delay="100" data-sal-duration="1000" className={styles.address}>
              <HouseFill />
              <p>Nowoczesna Witryna</p>
              <p>ul. Bogoczowiec 4c/9</p>
              <p>44-335 Jastrzębie-Zdrój</p>
            </div>
          </div>
          <div data-sal="slide-left" data-sal-delay="100" data-sal-duration="1000" className={styles.map}>
            <GoogleMaps />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactInfo;
