import React from 'react';
import * as styles from './ContactInfo.module.scss';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import { HomeIcon } from '../../../Icons/Icons';

const ContactInfo = () => {
  return (
    <div className={styles.contact_info}>
      <div className="container mx-auto px-4">
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <SectionTitle title="Adres" subtitle="Zobacz na mapie, gdzie się znajduję" />
            <div data-sal="slide-right" data-sal-delay="100" data-sal-duration="1000" className={styles.address}>
              <HomeIcon />
              <p>Nowoczesna Witryna</p>
              <p>ul. Bogoczowiec 4c/9</p>
              <p>44-335 Jastrzębie-Zdrój</p>
            </div>
          </div>
          <div data-sal="slide-left" data-sal-delay="100" data-sal-duration="1000" className={styles.map}>
            <GoogleMaps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
