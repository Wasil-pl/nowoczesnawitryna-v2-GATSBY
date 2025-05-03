import React from 'react';
import * as styles from './LPAboutMe.module.scss';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';

const LPAboutMe = ({ description }) => {
  return (
    <section id="omnie" className={styles.about_me}>
      <div className="container mx-auto px-4">
        <SectionTitle title="Kilka słów" coloredText=" o mnie" backgroundText="o mnie" />

        <div className={styles.wrapper}>
          <div data-sal="slide-right" data-sal-delay="100" data-sal-duration="1000" className={styles.first_column}>
            <StaticImage
              src="../../../../images/aboutMe.png"
              alt="Dariusz Wasilewski full-stack web developer"
              placeholder="blurred"
              width={600}
              className={styles.image}
            />
          </div>
          <div data-sal="slide-left" data-sal-delay="100" data-sal-duration="1000" className={styles.second_column}>
            <h3>Cześć</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LPAboutMe;
